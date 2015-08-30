FROM node:0.12.7
MAINTAINER Onezino Moreira zinogabriel@gmail.com

RUN apt-get update 

RUN npm install -g bower phantomjs

RUN npm install -g ember-cli@1.13.8

RUN apt-get clean

RUN mkdir /opt/src 

COPY  ./  /tmp/src/

WORKDIR /tmp/src

RUN npm install && bower install --allow-root && ember build