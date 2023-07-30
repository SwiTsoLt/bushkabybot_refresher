FROM python:3.11.0-alpine

WORKDIR /usr/src/app

RUN apk update
COPY ./req.txt /usr/src/app/req.txt
COPY ./entry.sh /usr/src/app/
RUN pip install -r req.txt
EXPOSE 8000

ENTRYPOINT [ "./entry.sh" ]