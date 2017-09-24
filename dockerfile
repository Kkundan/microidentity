FROM node:6.11.3-alpine
MAINTAINER Kundan Kundan.thelife@hotmail.com

RUN apt-get update

WORKDIR /opt/microidentity/

COPY C:\Users\kunda\Documents\Projects\microidentity /opt/

CMD ["node","index"]



