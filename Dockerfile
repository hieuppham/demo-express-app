FROM node:14.10.1
MAINTAINER hieupt
WORKDIR app
COPY package.json .
COPY ./node_modules/. ./node_modules/.
COPY ./build/. ./build/.
CMD npm start

# This is a comment line