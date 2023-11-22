CREATE DATABASE IF NOT EXISTS `askapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `askapp`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user` VARCHAR(50) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `tasks` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `status` enum('Pendin','In_Progress','Done') NOT NULL
);