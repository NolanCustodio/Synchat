FROM node:18.18-alpine

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

# Expose a port (if needed)
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]

