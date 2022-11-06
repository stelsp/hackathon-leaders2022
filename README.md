# IT-Terra-4
Hackaton
* Сервис позволяет искать товары, полученные из данных ФТС, скомпонованных по установленным пользователем отборам, в двух нишах рынка: используемые в производственной цепочке, потребительские товары
* Сервис периодически и автоматически загружает таможенную статистику, позволяет применить необходимые фильтры и удобно провести анализ информации
* UPD: Запуск проекта с помощью docker пока невозможен. Можно попробовать запустить локально.
## Документация к API
API документация доступна по ссылкам:
* [http://127.0.0.1:8000/swagger/](http://127.0.0.1:8000/swagger/)
* [http://127.0.0.1:8000/redoc/](http://127.0.0.1:8000/redoc/)
## Установка проекта локально
* Склонировать репозиторий и перейти в него в командной строке:
```bash
git clone https://github.com/Edw125/IT-Terra-4.git
cd IT-Terra-4
```
* Cоздать и активировать виртуальное окружение:
```bash
python -m venv env
```
```bash
source env/bin/activate
```
* Перейти в директорию и установить зависимости из файла requirements.txt:
```bash
cd backend/
pip install -r requirements.txt
```
* Запустите сервер:
```bash
cd customs_data_analysis_service/
python manage.py runserver
```
## Важные команды
* Выполните миграции:
```bash
python manage.py makemigrations
python manage.py migrate
```
* Команда загружает справочные таблицы в базу данных нашего сервиса
```bash
python manage.py runscript refbooks
```
* Команда загружает записи операций с сайта ФТС в автоматическом режиме
```bash
python manage.py runscript loader
```
## Запуск проекта в Docker контейнере
* Установите Docker

Параметры запуска описаны в файлах `docker-compose.yml`.
* Запустите docker compose:
```bash
docker-compose up -d --build
```  

  > После сборки появятся 3 контейнера:
  > 1. контейнер базы данных **db**
  > 2. контейнер приложения **backend**
  > 3. контейнер web-сервера **frontend**

* Примените миграции:
```bash
docker-compose exec backend python manage.py migrate
```
* Создайте администратора:
```bash
docker-compose exec backend python manage.py createsuperuser
```
* Соберите статику:
```bash
docker-compose exec backend python manage.py collectstatic --noinput
```
* Дополнительные команды очистки докера:
```bash
docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
docker rmi $(docker images -a -q)
docker volume prune
```