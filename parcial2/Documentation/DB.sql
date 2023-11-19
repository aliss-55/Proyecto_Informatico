IF NOT EXISTS (SELECT 1 FROM sys.databases WHERE name = 'askapp')
BEGIN
    CREATE DATABASE askapp;
END;

USE askapp;


IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'users')
BEGIN
    CREATE TABLE users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        [user] VARCHAR(50) NOT NULL,
        email VARCHAR(200) NOT NULL,
        [password] VARCHAR(255) NOT NULL
    );
END;

IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'tasks')
BEGIN
    CREATE TABLE tasks (
        id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NULL,
        status VARCHAR(20) NOT NULL CHECK (status IN ('Pendin', 'In_Progress', 'Done'))
    );
END;