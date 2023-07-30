FROM python:3.11.0-alpine

WORKDIR /usr/src/app

RUN apk update
COPY ./req.txt /usr/src/app/req.txt
RUN pip install -r req.txt
EXPOSE 8000
RUN python:3.11 main.py