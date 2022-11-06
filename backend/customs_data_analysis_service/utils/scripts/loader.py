import csv
import logging
import os

from os import listdir
from os.path import isfile, join
from zipfile import ZipFile

from utils.scripts.scraper import FCSScraper

from data.models import DepartureCountry, Direction, RegionDestination, \
    MeasurementUnit, TradeCode, Operation

logger = logging.getLogger(__name__)

dates = os.getenv('SCRAP_DATES', '').split('; ')
district = os.getenv('SCRAP_DISTRICTS', '').split('; ')
region = os.getenv('SCRAP_REGIONS', '').split('; ')


prefs = {
    'download.default_directory': f'{os.path.dirname(os.path.realpath(__file__))}/downloads',
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


def upload_operations(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "DATTSVT.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    try:
                        if row[1] == "period":
                            continue
                        date = row[1].split("/")
                        row_region = row[8].split(" - ")
                        value = float(row[5].replace(",", "."))
                        netto = float(row[6].replace(",", "."))
                        trade_code = TradeCode.objects.filter(code=row[3]).first()
                        direction = Direction.objects.filter(name=row[0]).first()
                        country = DepartureCountry.objects.filter(code=row[2]).first()
                        region = RegionDestination.objects.filter(name=row_region[1]).first()
                        m_unit = MeasurementUnit.objects.filter(name=row[4]).first()
                        Operation.objects.get_or_create(
                            period=f"{date[1]}-{date[0]}-01",
                            direction=direction,
                            country=country,
                            trade_code=trade_code,
                            measurement_unit=m_unit,
                            value=value,
                            netto=netto,
                            region=region
                        )
                    except Exception as error:
                        logger.error(error)
            break
    logger.info("Task upload_operations ended")


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
