import datetime

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

DIRECTION_CHOICES = [
    (None, ""),
    ("ЭК", "Экспорт"),
    ("ИМ", "Импорт"),
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
        "Направление", choices=DIRECTION_CHOICES, default=None, max_length=200
    )

    class Meta:
        ordering = ("name",)
        verbose_name = "Направление"
        verbose_name_plural = "Направления"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField("Группа товаров", max_length=200)

    class Meta:
        ordering = ("name",)
        verbose_name = "Группа продукта"
        verbose_name_plural = "Группы продуктов"

    def __str__(self):
        return self.name


class TradeCode(models.Model):
    code = models.PositiveIntegerField("ТНВЭД")
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="trade_code", verbose_name="Группа товаров"
    )
    is_new_version = models.BooleanField("Версия ТНВЭД до 2022 г.", default=False)

    class Meta:
        ordering = ('code',)
        verbose_name = "ТНВЭД"
        verbose_name_plural = "ТНВЭД"

    def __str__(self):
        return self.product


class Region(models.Model):
    code = models.PositiveIntegerField("Код региона")
    name = models.CharField("Группа товаров", max_length=200)
    district = models.CharField("Округ", max_length=200)

    class Meta:
        ordering = ('code',)
        verbose_name = "Регион импорта"
        verbose_name_plural = "Регионы импорта"

    def __str__(self):
        return self.name


class Operation(models.Model):
    period = models.DateField("Дата операции")
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
    netto = models.PositiveIntegerField("Вес")
    value = models.PositiveIntegerField("Стоимость")
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, related_name="operation", verbose_name="Регион импорта"
    )
    # measurement_unit = models.CharField('Единица измерения', max_length=200)

    class Meta:
        ordering = ('-period',)
        verbose_name = "Операция"
        verbose_name_plural = "Операции"

    def __str__(self):
        return f"Операция {self.pk}"
