# base image
# alpine - lightweight linux image
FROM node:lts-alpine
# working directory inside the image
WORKDIR /usr/src/app
# copy package.json and package-lock.json and other files
# from your dev machine
# into the working directory of image
COPY ["package.json", "package-lock.json*", "./"]
# install node dependencies
RUN npm ci
# copy source code into the image
COPY ./index.js ./
# port we will expose when starting a container
# with --publish flag
EXPOSE 5000
# execute the application
CMD ["npm", "start"]
