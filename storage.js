let produits = JSON.parse(localStorage.getItem('panier'));

if (produits) {

    for (let i = 0; i < produits.length; i++) {

        //   for (i = 0; i < localStorage.length; i++) {
        let articlePanier = document.createElement('li');

        // insertion de l'image via l'API //
        let picBearPanier = document.createElement('img');
        picBearPanier.classList.add('pictedPanier');
        picBearPanier.setAttribute('src', produits[i].image);

        // création du contenant pour afficher les infos //
        let oursInfoPanier = document.createElement('div');
        oursInfoPanier.classList.add('infoPanier');

        // Nom du produit //
        let oursNamePanier = document.createElement('div');
        oursNamePanier.classList.add('namePanier');
        oursNamePanier.textContent = 'Nom: ' +
            produits[i].nom;


        // création du contenant pour afficher les quantités //
        let oursInfoQuantPanier = document.createElement('div');
        oursInfoQuantPanier.classList.add('oursInfoQuantPanier');

        // légende quantité du produit //    
        let oursLegQuantitéPanier = document.createElement('div');
        oursLegQuantitéPanier.classList.add('légendeQuantitéPanier');
        oursLegQuantitéPanier.textContent = 'Nombre dans le panier: ';

        //bouton - quantité
        let moinsQuantitéPanier = document.createElement('input');
        moinsQuantitéPanier.classList.add('moinsQuantité');
        moinsQuantitéPanier.setAttribute('type', 'submit');
        moinsQuantitéPanier.setAttribute('value', '-');

        // quantité du produit //    
        let oursQuantitéPanier = document.createElement('div');
        oursQuantitéPanier.classList.add('quantitéPanier');
        oursQuantitéPanier.textContent = produits[i].quantité;

        //bouton + quantité    
        let plusQuantitéPanier = document.createElement('input');
        plusQuantitéPanier.classList.add('plusQuantité');
        plusQuantitéPanier.setAttribute('type', 'submit');
        plusQuantitéPanier.setAttribute('value', '+');

        // couleur du produit //    
        let ourscouleurPanier = document.createElement('div');
        ourscouleurPanier.classList.add('couleurPanier');
        ourscouleurPanier.textContent = 'Couleur: ' +
            produits[i].couleur;

        // prix du produit //
        let oursPricePanier = document.createElement('div');
        oursPricePanier.classList.add('pricePanier');
        let prixTotal = produits[i].prix * produits[i].quantité;
        oursPricePanier.textContent = 'Prix: ' +
            produits[i].prix / 100 + '€' + ' unitaire, soit un total de: ' + prixTotal / 100 + '€';

        // les enfants appartenant à bear //
        articlePanier.appendChild(picBearPanier);
        articlePanier.appendChild(oursInfoPanier);
        oursInfoPanier.appendChild(oursNamePanier);
        oursInfoPanier.appendChild(ourscouleurPanier);
        oursInfoPanier.appendChild(oursPricePanier);
        oursInfoPanier.appendChild(oursInfoQuantPanier);
        oursInfoQuantPanier.appendChild(oursLegQuantitéPanier);
        oursInfoQuantPanier.appendChild(moinsQuantitéPanier);
        oursInfoQuantPanier.appendChild(oursQuantitéPanier);
        oursInfoQuantPanier.appendChild(plusQuantitéPanier);

        document.getElementById('panierClient').appendChild(articlePanier);

        //on agit sur le click du bouton - pour reduire le nb d'article d'1
        moinsQuantitéPanier.addEventListener('click', (emoins) => {
            produits[i].quantité = produits[i].quantité - 1;
            localStorage.setItem('panier', JSON.stringify(produits));
            //on recharge la page
            document.location.reload();
        });

        //on agit sur le click du bouton + pour augmenter le nb d'article d'1
        plusQuantitéPanier.addEventListener('click', (eplus) => {
            produits[i].quantité = produits[i].quantité + 1;
            localStorage.setItem('panier', JSON.stringify(produits));
            //on recharge la page
            document.location.reload();
        });
        let nbArticle = 0 + produits[i].quantité;
        let nbCmde = document.getElementById('nbCmde');
        nbCmde.style.visibility = 'visible';
        nbCmde.textContent = nbArticle;
    }

    // bouton pour vider le panier
    let clearBtn = document.createElement('input');
    clearBtn.id = 'panier';
    clearBtn.setAttribute('type', 'submit');
    clearBtn.setAttribute('value', 'Vider le panier');

    document.getElementById('clear').appendChild(clearBtn);

    //on agit sur le click du bouton + pour augmenter le nb d'article d'1
    clearBtn.addEventListener('click', (clearBtn) => {
        localStorage.clear('panier', JSON.stringify(produits));
        //on recharge la page
        document.location.reload();
    });


} else {
    let titrePanier = document.getElementById('titrePanier');
    titrePanier.innerHTML = 'Votre panier est vide!'
}