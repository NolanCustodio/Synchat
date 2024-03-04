FROM node:18.18-alpine

WORKDIR /api
ENV PATH="./node_modules/.bin:$PATH"
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "devStart"]