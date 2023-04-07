create table events(
    eventID     INT             AUTO_INCREMENT  NOT NULL,
    eventName   VARCHAR(255)    NOT NULL,
    eventTopic  VARCHAR(255),

    PRIMARY KEY (eventID)
);