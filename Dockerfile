# Use an official Node.js v19 alpine runtime as the base image
FROM node:19.7.0-alpine3.17

RUN apk add --no-cache make bash yarn

# Set the working directory in the container
WORKDIR /var/www/enkya-blog

COPY package.json yarn.lock ./

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
