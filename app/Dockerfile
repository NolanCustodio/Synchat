FROM node:15.13-alpine
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./app/package.json
COPY package-lock.json ./app/package.json
RUN npm install
RUN npm update
COPY . .
CMD ["npm", "start"]