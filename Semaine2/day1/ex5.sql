UPDATE employes SET salaire = salaire * 1.10
WHERE departement = 'Développement';

UPDATE employes SET departement ='Direction' WHERE id =5;

DELETE FROM employes WHERE date_embauche <2015-00-00;

