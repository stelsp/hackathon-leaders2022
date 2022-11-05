import logging
import os

from os import listdir
from os.path import isfile, join
from zipfile import ZipFile

from utils.scripts.scraper import FCSScraper
from utils.scripts.refbooks_loader import upload_operations

logger = logging.getLogger(__name__)

dates = ["апрель 2019 г."]
district = ["ЦЕНТРАЛЬНЫЙ ФЕДЕРАЛЬНЫЙ ОКРУГ"]
region = ["46000"]

prefs = {
    'download.default_directory': f'{os.path.dirname(os.path.realpath(__file__))}/refbooks',
    'safebrowsing.disable_download_protection': True,
    'download.prompt_for_download': False,
    'download.directory_upgrade': True,
    'safebrowsing.enabled': True
}


def unzip_file(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    try:
        if files:
            for name in files:
                if ".zip" in name:
                    with ZipFile(directory + "/" + files[0], 'r') as zip_object:
                        zip_object.extractall(directory)
    except Exception as error:
        logger.error(error)


def clear_folder_after_work(directory):
    for file in os.listdir(directory):
        os.remove(os.path.join(directory, file))


def main(directory):
    scraper = FCSScraper(prefs)
    scraper.download_operations(date_list=dates, district_list=district, state_list=region)
    unzip_file(directory)
    upload_operations(directory)
    clear_folder_after_work(directory)


def run():
    main(prefs['download.default_directory'])
