CREATE DATABASE IF NOT EXISTS
leonardodb;

USE leonardodb;

CREATE TABLE IF NOT EXISTS produtos (

    id INT (10) AUTO_INCREMENT,
    name VARCHAR(255),
    preco DECIMAL (10,2),
    PRIMARY KEY (id)
);

INSERT INTO produtos VALUE(0, 'Placa de video', 3000);
INSERT INTO produtos VALUE(0, 'Processardor i7', 2500);