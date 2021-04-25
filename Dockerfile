FROM node:lts

WORKDIR /app

COPY package*.json ./
RUN yarn

COPY src ./src
COPY .env .
COPY tsconfig.json .

EXPOSE 3000

CMD [ "yarn", "dev" ]