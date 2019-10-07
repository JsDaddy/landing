FROM node:10

WORKDIR /usr/src/app

RUN npm install -g ts-node

RUN npm install -g typescript

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

RUN npm run deploy

CMD [ "ts-node", "./src/server/main.ts" ]
