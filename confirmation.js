let idUrl = window.location.search.substr(9);
let produitCmde = JSON.parse(localStorage.getItem('product'));
let clientCmde = JSON.parse(localStorage.getItem('contact'));
let prixTotalDuPanier = 0;

for (let i = 0; i < produitCmde.length; i++) {

    let nom = document.createElement('div');
    nom.classList.add('nom');
    nom.innerHTML = 'Bonjour ' + clientCmde.firstName + ' ' + clientCmde.lastName + ' <br> merci pour votre commande';
    let titre = document.createElement('div');
    titre.textContent = 'numéro de commande : ' + idUrl;

    let listeArticle = document.createElement('ul');
    let article = document.createElement('li');
    article.style.display = 'flex';

    let nomArticle = document.createElement('div');
    nomArticle.textContent = produitCmde[i].nom;

    let quantitéArticle = document.createElement('div');
    quantitéArticle.textContent = produitCmde[i].quantité;

    let prixArticle = document.createElement('div');
    prixArticle.textContent = produitCmde[i].prix / 100 + '€';




    document.getElementById('merci').appendChild(nom);
    document.getElementById('merci').appendChild(titre);
    document.getElementById('merci').appendChild(listeArticle);
    listeArticle.appendChild(article);
    article.appendChild(nomArticle);
    article.appendChild(quantitéArticle);
    article.appendChild(prixArticle);

    let prixTotal = produitCmde[i].prix * produitCmde[i].quantité;
    prixTotalDuPanier = (prixTotalDuPanier + prixTotal);

}
//Prix global du panier
prixTotalPanier = document.createElement('div');
prixTotalPanier.id = 'prixTotalPanier';
prixTotalPanier.textContent = 'Le total de votre commande est de: ' + prixTotalDuPanier / 100 + '€';
document.getElementById('merci').appendChild(prixTotalPanier);