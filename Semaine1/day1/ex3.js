let personne ={
    nom : 'ghizlane',
    prenom : 'bouaddi',
    age : 24,
    ville : 'youssefia',
    email : 'ghizlane@gmail.com'
}

console.log(`name : ${personne.nom} - prenom : ${personne.prenom} - age :${personne.age} - ville : ${personne.ville} - email : ${personne.email}`);

personne.ville = 'raba';
personne.téléphone = '0102030405';

console.log(`name : ${personne.nom} - prenom : ${personne.prenom} - age :${personne.age} - ville : ${personne.ville} - email : ${personne.email} - téléphone : ${personne.téléphone}`);