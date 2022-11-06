from django.contrib import admin

from customs_data_analysis_service.settings import VALUE_DISPLAY
from data.models import DepartureCountry, Direction, TradeCode, RegionDestination, DistrictDestination, \
    MeasurementUnit, Operation


# Register your models here.
@admin.register(DepartureCountry)
class DepartureCountryAdmin(admin.ModelAdmin):
    list_display = ('code', 'name',)
    list_filter = ('code',)
    search_fields = ('code', 'name',)
    empty_value_display = VALUE_DISPLAY


@admin.register(Direction)
class DirectionAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)
    search_fields = ('name',)
    empty_value_display = VALUE_DISPLAY


@admin.register(TradeCode)
class TradeCodeAdmin(admin.ModelAdmin):
    list_display = ('code', 'product',)
    list_filter = ('code',)
    search_fields = ('code', 'product',)
    empty_value_display = VALUE_DISPLAY


@admin.register(RegionDestination)
class RegionDestinationAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'district')
    list_filter = ('code',)
    search_fields = ('code', 'name', 'district')
    empty_value_display = VALUE_DISPLAY


@admin.register(DistrictDestination)
class DistrictDestinationAdmin(admin.ModelAdmin):
    list_display = ('code', 'name',)
    list_filter = ('code',)
    search_fields = ('code', 'name',)
    empty_value_display = VALUE_DISPLAY


@admin.register(MeasurementUnit)
class MeasurementUnitAdmin(admin.ModelAdmin):
    list_display = ('code', 'name',)
    list_filter = ('code',)
    search_fields = ('code', 'name',)
    empty_value_display = VALUE_DISPLAY


@admin.register(Operation)
class OperationAdmin(admin.ModelAdmin):
    list_display = ('period', 'trade_code', 'direction', 'country', 'region', 'netto', 'value',)
    list_filter = ('period', 'trade_code',)
    search_fields = ('period', 'tradecode', 'direction', 'country', 'region', 'netto', 'value',)
    empty_value_display = VALUE_DISPLAY
