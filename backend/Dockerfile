FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g npm@latest

RUN npm install knex

# RUN yarn knex migrate:latest

# RUN yarn knex seed:run

RUN npm install

CMD npm start

EXPOSE 8000