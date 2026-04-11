CREATE TABLE editeurs(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL,
    pays VARCHAR(20) NOT NULL
);

CREATE TABLE genres(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT null
);

CREATE TABLE livres (
    id int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    prix decimal(8,2) NOT NULL,
    annee_publication VARCHAR(20),
    editeur_id INT,
    genre_id INT,
    FOREIGN KEY(editeur_id) REFERENCES editeurs(id),
    FOREIGN KEY(genre_id) REFERENCES genres(id)
);

CREATE TABLE ventes (
    id int PRIMARY KEY AUTO_INCREMENT,
    livre_id int,
    client VARCHAR(20),
    quantite INT NOT NULL,
    date_vente VARCHAR(20),
    FOREIGN KEY (liver_id) REFERENCES livres(id)
);


SELECT editeurs.name, COUNT(livres.id) FROM livres JOIN editeurs ON editeurs.id = livres.editeur_id GROUP BY editeurs.id ORDER BY livres.id DESC;

SELECT genres.name ,SUM(ventes.quantite * livres.prix) FROM ventes
JOIN livres ON livres.id = ventes.livre_id
JOIN genres ON genres.id = livres.genre_id
GROUP BY genres.name
ORDER BY SUM(ventes.quantite * livres.prix) DESC

SELECT editeurs.name FROM editeurs LEFT JOIN livres ON livres.editeur_id = editeurs.id LEFT JOIN ventes ON ventes.livre_id = livres.id WHERE ventes.id IS null;

 5- SELECT genres.id ,MAX(livres.titre) FROM livres GROUP BY genres.id 
 6-SELECT ventes.client ,livres.id,genres.id FROM livres JOIN ventes ON ventes.client = livres.id JOIN genres ON JOIN.id = livres.genre_id WHERE MAX(ventes.client) GROUP BY genres.id 
 7-SELECT livres.titre, livres.annee_publication ,livres.prix FROM livres WHERE livres.annee_publication >= 1/1/2020 and AVG(livres.prix) <livres.prix