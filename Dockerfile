FROM node

COPY . /src
RUN cd /src; npm install
WORKDIR /src

EXPOSE 3000
