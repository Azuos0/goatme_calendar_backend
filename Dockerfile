FROM node:lts-alpine3.10

WORKDIR /app

COPY package*.json ./
RUN yarn

COPY src ./src
COPY .env .
COPY tsconfig.json .

EXPOSE 3000

ENTRYPOINT [ "yarn", "dev"]