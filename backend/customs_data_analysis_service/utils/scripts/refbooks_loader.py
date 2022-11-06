import csv
import logging
import os

from os import listdir
from os.path import isfile, join
from data.models import DepartureCountry, DistrictDestination, Direction, RegionDestination, \
    MeasurementUnit, TradeCode

logger = logging.getLogger(__name__)


def upload_directions():
    Direction.objects.get_or_create(name=Direction.Operations.op_import)
    Direction.objects.get_or_create(name=Direction.Operations.op_export)


def upload_countries(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "countries.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    DepartureCountry.objects.get_or_create(code=row[0], name=row[1])
            break
    logger.info("Task upload_countries ended")


def upload_districts(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "districts.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    DistrictDestination.objects.get_or_create(code=row[0], name=row[1])
            break
    logger.info("Task upload_districts ended")


def upload_regions(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "regions.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[2] == "NAME":
                        continue
                    district = DistrictDestination.objects.filter(code=str(row[1])).first()
                    RegionDestination.objects.get_or_create(code=row[0], district=district, name=row[2].strip())
            break
    logger.info("Task upload_regions ended")


def upload_measurement_units(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "units.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    MeasurementUnit.objects.get_or_create(code=row[0], name=row[1])
            break
    logger.info("Task upload_measurement_units ended")


def upload_tradecode(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "tradecode.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    if len(row[0]) == 10:
                        TradeCode.objects.get_or_create(code=row[0], product=row[1])
            break
    logger.info("Task upload_tradecode ended")


def upload_risk_countries(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "bad_countries.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter=',')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    country = DepartureCountry.objects.filter(code=row[0]).first()
                    country.have_risk = True
                    country.save()
    logger.info("Task upload_risk_countries ended")


def run():
    directory = os.path.dirname(os.path.realpath(__file__)) + "/refbooks"
    upload_directions()
    upload_countries(directory)
    upload_risk_countries(directory)
    upload_districts(directory)
    upload_regions(directory)
    upload_measurement_units(directory)
    upload_tradecode(directory)
