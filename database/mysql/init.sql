CREATE DATABASE IF NOT EXISTS `synchatDB`;

use `synchatDB`;

CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'aseg9aregui3wgofawgasfagh4h';

GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';

-- ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'as9v8y9348ehvfw39a8vfbh';
FLUSH PRIVILEGES;
