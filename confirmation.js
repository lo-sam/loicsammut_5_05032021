//on récupère le numéro de commande
let idUrl = window.location.search.substr(9);
// on récupère les produits et le contact dans le localStorage
let produitCmde = JSON.parse(localStorage.getItem('product'));
let clientCmde = JSON.parse(localStorage.getItem('contact'));
let prixTotalDuPanier = 0;

// information du client 
let nom = document.createElement('div');
nom.classList.add('nom');
nom.innerHTML = 'Bonjour ' + clientCmde.firstName + ' ' + clientCmde.lastName + ' <br> merci pour votre commande';

// numéro de la commande
let nbCmde = document.createElement('div');
nbCmde.classList.add('numCommande');
nbCmde.textContent = 'numéro de commande : ' + idUrl;

document.getElementById('merci').appendChild(nom);
document.getElementById('merci').appendChild(nbCmde);


// boucle pour afficher chaque article commandé
for (let i = 0; i < produitCmde.length; i++) {
    //on crée une liste
    let listeArticle = document.createElement('ul');
    let article = document.createElement('li');
    article.classList.add('listeConfirm');
    article.style.display = 'flex';
    //on affiche le nom du produit
    let nomArticle = document.createElement('div');
    nomArticle.classList.add('miseEnForme');
    nomArticle.textContent = "Ourson " +
        produitCmde[i].nom;
    //on affiche son prix
    let prixArticle = document.createElement('div');
    prixArticle.classList.add('miseEnForme');
    prixArticle.innerHTML = 'Prix unitaire: ' +
        produitCmde[i].prix / 100 + '€';
    //on affiche la quantité commandée
    let quantitéArticle = document.createElement('div');
    quantitéArticle.classList.add('miseEnForme');
    quantitéArticle.innerHTML = 'Quantité: ' + produitCmde[i].quantité;
    //on affiche le prix total pour ce produit
    let quantitésArticle = document.createElement('div');
    quantitésArticle.classList.add('miseEnForme');
    quantitésArticle.textContent = "Prix Total: " + ((produitCmde[i].prix / 100) * produitCmde[i].quantité) + '€';
    //on calcule le prix total de la commande
    let prixTotal = produitCmde[i].prix * produitCmde[i].quantité;
    prixTotalDuPanier = (prixTotalDuPanier + prixTotal);

    document.getElementById('merci').appendChild(listeArticle);

    listeArticle.appendChild(article);
    article.appendChild(nomArticle);
    article.appendChild(prixArticle);
    article.appendChild(quantitéArticle);
    article.appendChild(quantitésArticle);
}
//Prix global du panier
prixTotalPanier = document.createElement('div');
prixTotalPanier.id = 'prixTotalPanier';
prixTotalPanier.textContent = 'Le total de votre commande est de: ' + prixTotalDuPanier / 100 + '€';
document.getElementById('merci').appendChild(prixTotalPanier);