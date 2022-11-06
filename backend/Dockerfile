FROM python:3.10.4-slim as builder

WORKDIR /app
COPY requirements.txt .

RUN  apt-get -y update \
  && apt-get install -y wget \
  && apt-get install -y apt-utils

RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libcairo2 libcups2  \
    libfontconfig1 libgdk-pixbuf2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 \
    libxss1 fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install
RUN pip3 install -r requirements.txt --no-cache-dir

COPY . .

RUN ["chmod", "+x", "./docker-entrypoint.sh"]
ENTRYPOINT ["./docker-entrypoint.sh"]