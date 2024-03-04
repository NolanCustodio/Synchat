FROM node:18.18-alpine

WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "devStart"]