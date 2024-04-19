#!/bin/bash
# openssl rand -base64 756 > /mongo-keyfile
# chmod 400 /mongo-keyfile
# chown mongodb:mongodb /mongo-keyfile
mongod --replSet "rs0" --bind_ip_all --keyFile "/mongo-keyfile"
mongo rs.initiate();