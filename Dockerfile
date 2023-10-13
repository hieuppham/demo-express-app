FROM node:14.10.1
MAINTAINER hieupt
WORKDIR app
COPY package.json .
COPY tsconfig.json .
RUN npm install
RUN npm run build
RUN ls
COPY ./build .
CMD npm start
