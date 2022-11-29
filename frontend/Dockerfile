FROM node:lts

WORKDIR /app

COPY build build

RUN yarn global add serve

CMD serve -s build

# RUN npm install -g npm@latest

# RUN npm install --legacy-peer-deps

# CMD npm start

EXPOSE 3000