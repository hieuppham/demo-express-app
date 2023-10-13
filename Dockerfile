FROM node:14.10.1
MAINTAINER hieupt
WORKDIR app
RUN npm install
RUN npm run build
COPY package.json .
COPY ./build .
CMD npm start