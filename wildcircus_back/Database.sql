CREATE DATABASE IF NOT EXISTS wildcircus;

USE wildcircus;

CREATE TABLE representation (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ville VARCHAR (100),
  date_representation DATE,
  heure_representation TIME,
  places_dispo INT DEFAULT 95
);

insert into representation (ville, date_representation,heure_representation) values
  ('nantes', '2020-01-29','20:30:00'),
  ('paris', '2020-02-29','19:30:00'),
  ('lyon', '2020-03-16','12:30:00'),
  ('nantes', '2020-01-29','16:00:00'),
  ('limoges', '2020-05-05','22:30:00'),
  ('marseille', '2021-12-19','20:30:00');