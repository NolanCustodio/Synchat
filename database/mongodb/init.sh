#!/bin/sh
mongod --replSet "rs0" --bind_ip_all --keyFile "/mongo-keyfile"
mongod --eval rs.initiate