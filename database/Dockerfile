FROM mongo:7.0

RUN openssl rand -base64 756 > /mongo-keyfile
RUN chmod 400 /mongo-keyfile
RUN chown mongodb:mongodb /mongo-keyfile

# COPY ./mongodb/mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js
COPY ./mongodb/mongo-init.js /mongo-init.js
RUN chmod 400 mongo-init.js

# RUN chmod +x /init.sh

CMD ["/mongo-init.js"]

# CMD ["mongod", "--replSet", "rs0", "--bind_ip_all", "--keyFile", "/mongo-keyfile" ]

# COPY ./mongodb/generate-keyfile.sh /generate-keyfile.sh

# RUN chmod +x /generate-keyfile.sh

# COPY ./mongodb/generate-keyfile.sh /generate-keyfile.sh

# COPY ./mongodb/mongod.conf /etc/mongod.conf

# COPY ./mongodb/mongo-init.js /docker-entrypoint-initd.d/mono-init.js

# RUN mkdir -p /opt/keyfile && \
#     /bin/bash /generate-keyfile.sh

# CMD ["mongod", "-f", "/etc/mongod.conf"]