create table users(
    userID      INT             AUTO_INCREMENT  NOT NULL,
    username    VARCHAR(255)    NOT NULL        UNIQUE,
    email       VARCHAR(255),
    password    VARCHAR(255)    NOT NULL,

    PRIMARY KEY (userID)
);