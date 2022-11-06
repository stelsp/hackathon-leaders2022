# IT-Terra-4
Hackaton
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
## Документация к API
API документация доступна по ссылкам:
* [http://127.0.0.1:8000/swagger/](http://127.0.0.1:8000/swagger/)
* [http://127.0.0.1:8000/redoc/](http://127.0.0.1:8000/redoc/)

## Фронт локально

```bash
cd frontend

npm i

npm run dev
```
