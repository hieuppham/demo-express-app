FROM node:14.10.1
MAINTAINER hieupt
WORKDIR app
COPY package.json .
COPY ./node_modules/. ./node_modules/.
COPY ./build/. ./build/.
CMD npm start

# This is a comment line
# This is also a comment line
# This is a comment line #3


# This is a comment line #4
# This is a comment line #5
# This is a comment line #6
# This is a comment line #7
# This is a comment line #8
# This is a comment line #9
# This is a comment line #10