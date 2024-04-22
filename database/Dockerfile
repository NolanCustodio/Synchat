FROM mongo:7.0

EXPOSE 27017

RUN openssl rand -base64 756 > /mongo-keyfile
RUN chmod 400 /mongo-keyfile
RUN chown mongodb:mongodb /mongo-keyfile

COPY ./mongodb/mongod.conf /etc

# COPY ./mongodb/mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js
# COPY ./mongodb/mongo-init.js /mongo-init.js
# RUN chmod 400 mongo-init.js

# # RUN chmod +x /init.sh

# CMD ["/mongo-init.js"]