DROP DATABASE IF EXISTS Fridge_db;
CREATE DATABASE Fridge_db;

USE Fridge_db;

CREATE TABLE dates (
    dates_id INT (10) AUTO_INCREMENT NOT NULL,
    food_name VARCHAR (100) NOT NULL,
    category VARCHAR (100) NOT NULL,
    ex_date INT (10),
    PRIMARY KEY (dates_id)
);

-- CREATE TABLE users (
--     user_id INT (10) AUTO_INCREMENT NOT NULL,
--     email VARCHAR (100) NOT NULL,
--     password VARCHAR (100) NOT NULL,
--     PRIMARY KEY (user_id)
-- );

CREATE TABLE user_items (
    id INT (10) AUTO_INCREMENT NOT NULL,
    user_email VARCHAR (100),
    name VARCHAR (100),
    category VARCHAR (100),
    ex_date INT (10),
    date TIMESTAMP,
    FOREIGN KEY (id) REFERENCES dates(dates_id),
	-- FOREIGN KEY (id) REFERENCES users(user_id),
    edited_date INT (100),
    PRIMARY KEY (id)
);