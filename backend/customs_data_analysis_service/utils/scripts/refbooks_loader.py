import csv
from datetime import datetime

from os import listdir
from os.path import isfile, join

from customs_data_analysis_service.settings import BASE_DIR
from data.models import DepartureCountry, DistrictDestination, Direction, RegionDestination, \
    MeasurementUnit, TradeCode, Operation


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


def upload_regions(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "regions.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    name = row[1].split(" - ")
                    RegionDestination.objects.get_or_create(code=row[0], name=name[1], district=name[0])
            break


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


def upload_tradecode(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "tradecode.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "NAME":
                        continue
                    if len(row[1]) == 10:
                        TradeCode.objects.get_or_create(code=row[1], product=row[2])
            break


def upload_operations(directory):
    files = [f for f in listdir(directory) if isfile(join(directory, f))]
    for file in files:
        if file == "DATTSVT.csv":
            with open(directory + "/" + file, 'r') as csv_file:
                reader = csv.reader(csv_file, delimiter='\t')
                for row in reader:
                    if row[1] == "period":
                        continue
                    date = row[1].split("/")
                    region = row[8].split(" - ")
                    value = float(row[5].replace(",", "."))
                    netto = float(row[6].replace(",", "."))
                    trade_code = TradeCode.objects.filter(code=row[3]).first()
                    direction = Direction.objects.filter(name=row[0]).first()
                    country = DepartureCountry.objects.filter(code=row[2]).first()
                    region = RegionDestination.objects.filter(name=region[1]).first()
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
            break


def run():
    directory = str(BASE_DIR) + "/utils/downloads"
    upload_directions()
    upload_countries(directory)
    upload_districts(directory)
    upload_regions(directory)
    upload_measurement_units(directory)
    upload_tradecode(directory)
