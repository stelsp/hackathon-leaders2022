import logging
import os
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait

logger = logging.getLogger(__name__)


class FCSScraper:
    def __init__(self, preferences: dict = None, _url: str = None):
        self._url = "http://stat.customs.ru/unload"
        self._options = webdriver.ChromeOptions()
        self.preferences = preferences
        if self.preferences:
            self._options.add_experimental_option('prefs', preferences)
            self._options.add_argument('--disable-gpu')
            self._options.add_argument('--headless')
            self._options.add_argument('--no-sandbox')
        self._driver_dir = os.path.dirname(os.path.realpath(__file__)) + "/driver/chromedriver"
        self._service = Service(self._driver_dir)
        self.driver = webdriver.Chrome(options=self._options, service=self._service)

    def download_operations(
            self,
            date_list: list[str] = None,
            district_list: list[str] = None,
            state_list: list[str] = None
    ) -> bool:
        if not date_list and not district_list and not state_list:
            return False
        self.driver.get(self._url)
        sleep(5)
        try:
            # select and click period
            if date_list:
                element_period = WebDriverWait(self.driver, timeout=10).until(
                    lambda e: e.find_element(
                        By.XPATH,
                        '/html/body/div[1]/div/div/div/div/form/div[1]/div[3]/div/div/div/div'
                    )
                )
                element_period.click()
                sleep(5)
                period = WebDriverWait(self.driver, timeout=10).until(
                    lambda e: e.find_element(
                        By.XPATH,
                        '//*[@id="react-select-periodSelect-input"]'
                    )
                )
                for item in date_list:
                    period.send_keys(item)
                    period.send_keys(Keys.ENTER)
                    sleep(1)
                element_period.click()
                sleep(5)

            # select and click district
            if district_list:
                element_district = WebDriverWait(self.driver, timeout=10).until(
                    lambda e: e.find_element(
                        By.XPATH,
                        '/html/body/div[1]/div/div/div/div/form/div[1]/div[4]/div/div/div/div'
                    )
                )
                element_district.click()
                sleep(5)
                district = WebDriverWait(self.driver, timeout=10).until(
                    lambda e: e.find_element(
                        By.XPATH,
                        '//*[@id="react-select-districtSelect-input"]'
                    )
                )
                for item in district_list:
                    district.send_keys(item)
                    district.send_keys(Keys.ENTER)
                    sleep(3)
                element_district.click()
                sleep(5)

            # select and click state
            if state_list:
                element_state = WebDriverWait(self.driver, timeout=10).until(
                    lambda e: e.find_element(
                        By.XPATH,
                        '/html/body/div[1]/div/div/div/div/form/div[1]/div[5]/div/div/div/div'
                    )
                )
                element_state.click()
                sleep(5)
                state = WebDriverWait(self.driver, timeout=10).until(
                    lambda e: e.find_element(
                        By.XPATH,
                        '//*[@id="react-select-subjectSelect-input"]'
                    )
                )
                for item in state_list:
                    state.send_keys(item)
                    state.send_keys(Keys.ENTER)
                    sleep(1)
                element_state.click()
                sleep(5)

            element_code = WebDriverWait(self.driver, timeout=10).until(
                lambda e: e.find_element(
                    By.XPATH,
                    '/html/body/div[1]/div/div/div/div/form/div[1]/div[6]/div/div/div/div/div'
                )
            )
            element_code.click()
            sleep(5)

            # Enter symbols
            symbols = WebDriverWait(self.driver, timeout=10).until(
                lambda e: e.find_element(
                    By.XPATH,
                    '//*[@id="react-select-tnvedLevelsSelect-input"]'
                )
            )
            symbols.send_keys("10 знаков")
            symbols.send_keys(Keys.ENTER)
            sleep(1)
            element_code.click()
            sleep(5)

            # Click download button
            button = WebDriverWait(self.driver, timeout=10).until(
                lambda e: e.find_element(
                    By.XPATH,
                    "/html/body/div[1]/div/div/div/div/form/div[1]/div[7]/button[2]"
                )
            )
            button.click()
        except Exception as err:
            logger.error(err)
            return False
        while True:
            sleep(5)
            if not os.listdir(self.preferences["download.default_directory"]):
                continue
            self.driver.close()
            return True
