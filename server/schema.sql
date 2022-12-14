CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  messageText VARCHAR(140) NOT NULL,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE friends (
  id INTEGER AUTO_INCREMENT,
  user1_id INTEGER,
  user2_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (user1_id) REFERENCES users(id),
  FOREIGN KEY (user2_id) REFERENCES users(id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

