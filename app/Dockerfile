FROM node:18.18-alpine as build
WORKDIR /app
# ENV PATH="./node_modules/.bin:$PATH"
# COPY public/ public
# COPY src/ src
COPY package.json package.json
# COPY package-lock.json ./package.json
RUN npm install
RUN npm update
COPY . .
# RUN npm run build
CMD ["npm", "run", "start"]

# FROM nginx:1.25
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /usr/share/nginx/html
