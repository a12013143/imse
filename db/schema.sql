### Schema
CREATE DATABASE fosterpet_db;

USE posterpet_db;

CREATE TABLE pets
(
	id int AUTO_INCREMENT NOT NULL,
    pet_name varchar(255) NOT NULL,
    category_id int NOT NULL,
    age_years int NOT NULL,
    age_months int NOT NULL,
	neutered boolean NOT NULL,
    content text ,
    profile_img_url varchar(255),
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
); 