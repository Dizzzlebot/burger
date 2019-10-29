USE burgers_db;

INSERT INTO burgers
    (burger_name, devoured)
VALUES("Slider" , FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES("Bison Burger" , FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES("Turkey Burger" , FALSE);

SELECT *
FROM burgers;