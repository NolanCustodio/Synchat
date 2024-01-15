#install Linux
FROM ubuntu:22.04

#create mysql instance
#run mysql
#init database and tables
RUN apt-get update 
RUN apt-get install -y mysql-server 
RUN apt-get install -y curl 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get install -y nodejs 
RUN rm -rf /var/lib/apt/lists/*

#mysql setup
COPY ./mysql/init.sql /docker-entrypoint-initdb.d/
COPY ./mysql/script /docker-entrypoint-initdb.d/

#Create user
RUN auser

#Node
WORKDIR /database
COPY package*.json ./
RUN npm install
COPY . .

#running both servers
COPY init.sh /init.sh
RUN chmod +x /init.sh

#runs the mysql server and node server
# CMD ["npm", "run", "devStart"]
ENTRYPOINT [ "/bin/sh","/init.sh" ]