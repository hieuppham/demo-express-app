FROM node:14.10.1
MAINTAINER hieupt
WORKDIR app
COPY package.json .
COPY ./build .
CMD npm start