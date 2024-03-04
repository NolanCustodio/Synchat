CREATE DATABASE IF NOT EXISTS `synchatDB`;

use `synchatDB`;

CREATE USER IF NOT EXISTS 'nolan'@'localhost' IDENTIFIED BY 'as9v8y9348ehvfw39a8vfbh';

GRANT ALL PRIVILEGES ON *.* TO 'nolan'@'localhost';

-- ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'as9v8y9348ehvfw39a8vfbh';
FLUSH PRIVILEGES;
