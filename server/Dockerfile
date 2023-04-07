FROM node:15.13-alpine
WORKDIR /server
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./server/package.json
COPY package-lock.json ./server/package.json
RUN npm install
RUN npm update
COPY . .
CMD ["npm", "run", "devStart"]