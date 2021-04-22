FROM node:lts

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3000