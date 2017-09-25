FROM node:6.11.3-alpine
MAINTAINER Kundan Kundan.thelife@hotmail.com


WORKDIR /opt/microidentity/


#RUN apt-get update
RUN npm install

COPY . /opt/microidentity/



ENTRYPOINT ["node","index"]

CMD [-c]



