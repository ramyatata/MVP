DROP DATABASE IF EXISTS RestaurantBuddy;
CREATE DATABASE RestaurantBuddy;

USE RestaurantBuddy;

CREATE TABLE users (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  userName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO user (firstName, lastName, userName, email, password)
VALUES ('Ramya', 'Tata', 'rtata', 'rtata@gmail.com', 'ramya'),
('Bob', 'Mc', 'mbob', 'mob@gmail.com', 'bob'),
('Chris', 'Hulsey', 'chul', 'chuk@gmail.com', 'chris');


