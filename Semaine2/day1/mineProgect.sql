 CREATE TABLE Hotel(
    id int primary key AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    adresse VARCHAR(100) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    telephone VARCHAR(20) NOT NULL
);

CREATE TABLE type_chambres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    capacite INT,
    description TEXT
);

CREATE TABLE Chambre(
    id int primary key AUTO_INCREMENT,
    numero VARCHAR(10) NOT NULL,
    etage int NOT NULL,
    prix  decimal(10,2) NOT NULL,
    statut VARCHAR(20) NOT NULL,
    hotel_id INT,
    type_id INT,
    FOREIGN KEY (hotel_id) REFERENCES hotels(id),
    FOREIGN KEY (type_id) REFERENCES type_chambres(id)
    
);

CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    telephone VARCHAR(20)
);

CREATE TABLE reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    statut VARCHAR(20),

    client_id INT,
    chambre_id INT,

    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (chambre_id) REFERENCES chambres(id)
);

CREATE TABLE factures (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date_facture DATE,
    montant_total DECIMAL(10,2),

    reservation_id INT UNIQUE,

    FOREIGN KEY (reservation_id) REFERENCES reservations(id)
);

CREATE TABLE services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prix DECIMAL(10,2),

    facture_id INT,

    FOREIGN KEY (facture_id) REFERENCES factures(id)
);

CREATE TABLE avis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    note INT CHECK (note BETWEEN 1 AND 5),
    commentaire TEXT,
    date_avis DATE,

    client_id INT,
    chambre_id INT,

    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (chambre_id) REFERENCES chambres(id)
);

SELECT type_chambres.id ,COUNT(reservations.date_debut) FROM type_chambres JOIN reservations ON reservations.id = type_chambres.id GROUP BY type_chambres.id

ELECT SUM(chambre.prix * reservations.date_debut - reservations.date_fin) ,type_chambres.id FROM type_chambres
JOIN reservations ON reservations.chambre_id = chambre.id JOIN chambre ON chambre.type_id = type_chambres.id 
GROUP BY type_chambres

SELECT clients.id ,COUNT(reservations.id) AS total FROM clients 
JOIN reservations ON reservations.client_id = clients.id GROUP BY clients.id 
HAVING clients.id >3

SELECT AVG(clients.id) FROM clients