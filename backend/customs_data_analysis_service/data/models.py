import datetime

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

DIRECTION_CHOICES = [
    (None, ""),
    ("ЭК", "Экспорт"),
    ("ИМ", "Импорт"),
]

TRADECODE_CHOICES = [
    ("new", "new"),
    ("old", "old"),
]


def current_year():
    return datetime.date.today().year


def max_value_current_year(value):
    return MaxValueValidator(current_year())(value)


class Country(models.Model):
    name = models.CharField("Страна", max_length=200)
    code = models.CharField("Сокращенный код", max_length=200)

    class Meta:
        ordering = ('name',)
        verbose_name = "Страна"
        verbose_name_plural = "Страны"

    def __str__(self):
        return self.name


class Direction(models.Model):
    name = models.CharField(
        "Направление", choices=DIRECTION_CHOICES, default=None
    )

    class Meta:
        ordering = ("name",)
        verbose_name = "Направление"
        verbose_name_plural = "Направления"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField("Группа товаров", max_length=200)


class TradeCode(models.Model):
    code = models.PositiveIntegerField("ТНВЭД")
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="trade_code", verbose_name="Группа товаров"
    )
    version = models.CharField(
        "Версия ТНВЭД", choices=TRADECODE_CHOICES, default="new"
    )


class Region(models.Model):
    pass


class Operation(models.Model):
    trade_code = models.ForeignKey(
        TradeCode, on_delete=models.CASCADE, related_name="operation", verbose_name="ТНВЭД"
    )
    direction = models.ForeignKey(
        Direction, on_delete=models.CASCADE, related_name="operation", verbose_name="Направление"
    )
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name="operation", verbose_name="Страна"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="operation", verbose_name="Группа товаров"
    )
    year = models.PositiveIntegerField(
        default=current_year(), validators=[MinValueValidator(1984), max_value_current_year]
    )
    measurement_unit = models.CharField('Единица измерения', max_length=200)
    netto = models.PositiveIntegerField("Вес")
    value = models.PositiveIntegerField("Стоимость")
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, related_name="operation", verbose_name="Регион импорта"
    )
