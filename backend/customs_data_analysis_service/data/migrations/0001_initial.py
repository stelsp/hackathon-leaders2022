# Generated by Django 4.1.2 on 2022-11-03 23:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DepartureCountry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=5, verbose_name='Сокращенный код')),
                ('name', models.CharField(max_length=50, verbose_name='Страна')),
            ],
            options={
                'verbose_name': 'Страна',
                'verbose_name_plural': 'Страны',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Direction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('None', ''), ('ЭК', 'Экспорт'), ('ИМ', 'Импорт')], default='None', max_length=20, verbose_name='Направление')),
            ],
            options={
                'verbose_name': 'Направление',
                'verbose_name_plural': 'Направления',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='DistrictDestination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, verbose_name='Код')),
                ('name', models.CharField(max_length=100, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Округ',
                'verbose_name_plural': 'Округи',
                'ordering': ('code',),
            },
        ),
        migrations.CreateModel(
            name='MeasurementUnit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.PositiveIntegerField(verbose_name='Код')),
                ('name', models.CharField(max_length=100, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Единица измерения',
                'verbose_name_plural': 'Единицы измерения',
                'ordering': ('code',),
            },
        ),
        migrations.CreateModel(
            name='RegionDestination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, verbose_name='Код региона')),
                ('name', models.CharField(max_length=100, verbose_name='Группа товаров')),
                ('district', models.CharField(max_length=100, verbose_name='Округ')),
            ],
            options={
                'verbose_name': 'Регион импорта',
                'verbose_name_plural': 'Регионы импорта',
                'ordering': ('code',),
            },
        ),
        migrations.CreateModel(
            name='TradeCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, verbose_name='ТНВЭД')),
                ('product', models.CharField(max_length=250, verbose_name='Товар')),
            ],
            options={
                'verbose_name': 'ТНВЭД/Товар',
                'verbose_name_plural': 'ТНВЭД/Товары',
                'ordering': ('code',),
            },
        ),
        migrations.CreateModel(
            name='Operation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period', models.DateField(verbose_name='Дата операции')),
                ('netto', models.PositiveIntegerField(verbose_name='Вес')),
                ('value', models.FloatField(verbose_name='Стоимость')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='operation', to='data.departurecountry', verbose_name='Страна')),
                ('direction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='operation', to='data.direction', verbose_name='Направление')),
                ('measurement_unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='operation', to='data.measurementunit', verbose_name='Единица измерения')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='operation', to='data.regiondestination', verbose_name='Регион импорта')),
                ('trade_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='operation', to='data.tradecode', verbose_name='ТНВЭД')),
            ],
            options={
                'verbose_name': 'Операция',
                'verbose_name_plural': 'Операции',
                'ordering': ('-period',),
            },
        ),
    ]
