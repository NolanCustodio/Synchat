#!/bin/bash

mysql -u root -p < init.sql

for file in ./script/tables/*.sql
do
    mysql -u $MYSQL_USER -p $MYSQL_PASSWORD $MYSQL_DATABASE < $file
done