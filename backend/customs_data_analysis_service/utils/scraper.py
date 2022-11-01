import logging
import os
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys

logger = logging.getLogger(__name__)


class FCSScraper:
    def __init__(self, _url: str = None):
        self._url = "http://stat.customs.ru/unload"
        self._options = webdriver.ChromeOptions()
        self.service = Service(os.path.dirname(os.path.realpath(__file__)) + "/driver/chromedriver")
        self.driver = webdriver.Chrome(options=self._options, service=self.service)

    def set_options(self, prefs):
        self._options.add_experimental_option('prefs', prefs)

    def download_operations(
            self,
            date_list: list[str] = None,
            district_list: list[str] = None,
            state_list: list[str] = None
    ) -> bool:
        if not date_list and not district_list and not state_list:
            return False
        is_empty = os.listdir(os.path.dirname(os.path.realpath(__file__)) + '/downloads')
        self.driver.get(self._url)
        try:
            if date_list:
                element_period = self.driver.find_element(
                    By.XPATH, '/html/body/div[1]/div/div/div/div/form/div[1]/div[3]/div/div/div/div'
                )
                element_period.click()
                period = self.driver.find_element(By.XPATH, '//*[@id="react-select-periodSelect-input"]')
                for item in date_list:
                    period.send_keys(item)
                    period.send_keys(Keys.ENTER)
                sleep(1)
                element_period.click()
            if district_list:
                element_district = self.driver.find_element(
                    By.XPATH, '/html/body/div[1]/div/div/div/div/form/div[1]/div[4]/div/div/div/div'
                )
                element_district.click()
                district = self.driver.find_element(By.XPATH, '//*[@id="react-select-districtSelect-input"]')
                for item in district_list:
                    district.send_keys(item)
                    district.send_keys(Keys.ENTER)
                sleep(1)
                element_district.click()
            if state_list:
                element_state = self.driver.find_element(
                    By.XPATH, '/html/body/div[1]/div/div/div/div/form/div[1]/div[5]/div/div/div/div'
                )
                element_state.click()
                state = self.driver.find_element(By.XPATH, '//*[@id="react-select-districtSelect-input"]')
                for item in state_list:
                    state.send_keys(item)
                    state.send_keys(Keys.ENTER)
                sleep(1)
                element_state.click()
            element_code = self.driver.find_element(
                By.XPATH, '/html/body/div[1]/div/div/div/div/form/div[1]/div[6]/div/div/div/div/div'
            )
            sleep(1)
            element_code.click()
            symbols = self.driver.find_element(By.XPATH, '//*[@id="react-select-tnvedLevelsSelect-input"]')
            symbols.send_keys("10 знаков")
            symbols.send_keys(Keys.ENTER)
            sleep(1)
            element_code.click()
            self.driver.find_element(
                By.XPATH, '/html/body/div[1]/div/div/div/div/form/div[1]/div[7]/button[2]'
            ).click()
        except Exception as err:
            logger.error(err)
            return False
        while True:
            sleep(10)
            if not is_empty:
                continue
            self.driver.close()
            return True


prefs = {
    'download.default_directory': f'{os.path.dirname(os.path.realpath(__file__))}/downloads',
    'safebrowsing.disable_download_protection': True,
    'download.prompt_for_download': False,
    'download.directory_upgrade': True,
    'safebrowsing.enabled': True
}

dates = ["апрель 2019 г."]
district = ["ЦЕНТРАЛЬНЫЙ ФЕДЕРАЛЬНЫЙ ОКРУГ"]
scraper = FCSScraper()
scraper.set_options(prefs)
scraper.download_operations(date_list=dates, district_list=district)
