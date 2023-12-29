FROM node:18.18-alpine
WORKDIR /server
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./package.json
COPY package-lock.json ./package.json
RUN npm install
RUN npm update
COPY . .

RUN npm uninstall bcrypt
RUN npm install bcrypt

CMD ["npm", "run", "devStart"]