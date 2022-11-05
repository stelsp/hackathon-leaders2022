
from django.db import models


class DepartureCountry(models.Model):
    code = models.CharField("Сокращенный код", max_length=5)
    name = models.CharField("Страна", max_length=50)

    class Meta:
        ordering = ('name',)
        verbose_name = "Страна"
        verbose_name_plural = "Страны"

    def __str__(self):
        return self.name


class Direction(models.Model):
    class Operations(models.TextChoices):
        null = (None, "")
        op_export = ("ЭК", "Экспорт")
        op_import = ("ИМ", "Импорт")

    name = models.CharField(
        "Направление", choices=Operations.choices, default=Operations.null, max_length=20
    )

    class Meta:
        ordering = ("name",)
        verbose_name = "Направление"
        verbose_name_plural = "Направления"

    def __str__(self):
        return self.name


class TradeCode(models.Model):
    code = models.CharField("ТНВЭД", max_length=10)
    product = models.CharField("Товар", max_length=250)

    class Meta:
        ordering = ('code',)
        verbose_name = "ТНВЭД/Товар"
        verbose_name_plural = "ТНВЭД/Товары"

    def __str__(self):
        return f"{self.code} - {self.product}"


class RegionDestination(models.Model):
    code = models.CharField("Код региона", max_length=10)
    name = models.CharField("Группа товаров", max_length=100)
    district = models.CharField("Округ", max_length=100)

    class Meta:
        ordering = ('code',)
        verbose_name = "Регион импорта"
        verbose_name_plural = "Регионы импорта"

    def __str__(self):
        return self.name


class DistrictDestination(models.Model):
    code = models.CharField("Код", max_length=10)
    name = models.CharField("Название", max_length=100)

    class Meta:
        ordering = ('code',)
        verbose_name = "Округ"
        verbose_name_plural = "Округи"

    def __str__(self):
        return self.name


class MeasurementUnit(models.Model):
    code = models.PositiveIntegerField("Код")
    name = models.CharField("Название", max_length=100)

    class Meta:
        ordering = ('code',)
        verbose_name = "Единица измерения"
        verbose_name_plural = "Единицы измерения"

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
        DepartureCountry, on_delete=models.CASCADE, related_name="operation", verbose_name="Страна"
    )
    measurement_unit = models.ForeignKey(
        MeasurementUnit, on_delete=models.CASCADE, related_name="operation", verbose_name="Единица измерения",
        null=True, blank=True
    )
    region = models.ForeignKey(
        RegionDestination, on_delete=models.CASCADE, related_name="operation", verbose_name="Регион импорта"
    )
    netto = models.FloatField("Вес")
    value = models.FloatField("Стоимость")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-period',)
        verbose_name = "Операция"
        verbose_name_plural = "Операции"

    def __str__(self):
        return f"Операция: {self.direction}, ТНВЭД: {self.trade_code},  СТРАНА ВВОЗА:{self.country}"
