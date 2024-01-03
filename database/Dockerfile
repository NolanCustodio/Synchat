# Database
FROM mysql:8

COPY init.sql /docker-entrypoint-initdb.d/
COPY ./script /docker-entrypoint-initdb.d/

# Node for RabbitMQ
FROM node:18.18-alpine

WORKDIR /rabbit
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "devStart"]