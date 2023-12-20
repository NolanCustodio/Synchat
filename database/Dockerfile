FROM mysql:8

WORKDIR /docker-entrypoint-initdb.d

COPY init.sql /docker-entrypoint-initdb.d/

COPY ./script /docker-entrypoint-initdb.d/


