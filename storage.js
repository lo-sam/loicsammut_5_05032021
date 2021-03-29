let produits = JSON.parse(localStorage.getItem('panier'));


////////////////////PANIER////////////////////
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


    ////////////////////FORMULAIRE////////////////////


    // import d un séparateur pour délimiter les articles du formulaire
    let separateur = document.createElement('img');
    separateur.setAttribute('src', ' images/line.png ');
    separateur.classList.add('separateur');

    //création du formulaire
    let formulaire = document.createElement('form');
    formulaire.setAttribute('method', 'GET');
    formulaire.classList.add('formCommande');

    //label Prénom
    let firstName = document.createElement('label');
    firstName.classList.add('firstName');
    firstName.setAttribute('for', 'firstName');
    firstName.textContent = ('Prénom:');

    //input de saisi du prénom
    let firstNameI = document.createElement('input');
    firstNameI.id = 'firstName';
    firstNameI.setAttribute('type', 'text');
    firstNameI.setAttribute('pattern', "[A-Z, a-z]{3}");



    //label Nom
    let lastName = document.createElement('label');
    lastName.classList.add('lastName');
    lastName.setAttribute('for', 'lastName');
    lastName.textContent = ('Nom:');

    //input de saisi du Nom
    let lastNameI = document.createElement('input');
    lastNameI.id = 'lastName';
    lastNameI.setAttribute('type', 'text');
    lastNameI.setAttribute('pattern', "[A-Z, a-z]{3}");


    //label adresse
    let adress = document.createElement('label');
    adress.classList.add('adress');
    adress.setAttribute('for', 'adress');
    adress.textContent = ('adresse:');

    //input de saisi de l'adresse
    let adressI = document.createElement('input');
    adressI.id = 'adress';
    adressI.setAttribute('type', 'text');

    //label de la ville
    let city = document.createElement('label');
    city.classList.add('city');
    city.setAttribute('for', 'city');
    city.textContent = ('Ville:');

    //input de saisi de la ville
    let cityI = document.createElement('input');
    cityI.id = 'city';
    cityI.setAttribute('type', 'text');
    cityI.setAttribute('pattern', "[A-Z, a-z]");

    //label adresse mail
    let mail = document.createElement('label');
    mail.classList.add('mail');
    mail.setAttribute('for', 'mail');
    mail.textContent = ('adresse e-mail:');

    //input de saisi de l'adresse mail
    let mailI = document.createElement('input');
    mailI.id = 'mail';
    mailI.setAttribute('type', 'mail');
    mailI.setAttribute('pattern', "[0-9]{5}");

    //input de validation de formulaire
    let validCmdBtn = document.createElement('input');
    validCmdBtn.id = 'validCmdBtn';
    validCmdBtn.setAttribute('type', 'submit');
    validCmdBtn.setAttribute('value', 'Valider la commande');

    document.getElementById('form').appendChild(separateur);
    document.getElementById('form').appendChild(formulaire);
    formulaire.appendChild(firstName);
    formulaire.appendChild(firstNameI);
    formulaire.appendChild(lastName);
    formulaire.appendChild(lastNameI);
    formulaire.appendChild(adress);
    formulaire.appendChild(adressI);
    formulaire.appendChild(city);
    formulaire.appendChild(cityI);
    formulaire.appendChild(mail);
    formulaire.appendChild(mailI);
    formulaire.appendChild(validCmdBtn);



    // Evenement d'ajout du bon de commande
    validCmdBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let prénom = document.getElementById('firstName').value;
        let nom = document.getElementById('lastName').value;
        let adresse = document.getElementById('adress').value;
        let ville = document.getElementById('city').value;
        let email = document.getElementById('mail').value;
        //  bon de commande que l'on crée dans le tableau validCmdBtn
        let bonDeCommande = {
            prénom: prénom,
            nom: nom,
            adresse: adresse,
            ville: ville,
            email: email,
            panier: JSON.parse(localStorage.getItem('panier'))
        };
        let bonDeCommandes = JSON.parse(localStorage.getItem('validCmdBtn'));
        bonDeCommandes = [];
        bonDeCommandes.push(bonDeCommande);
        localStorage.setItem('validCmdBtn', JSON.stringify(bonDeCommandes));
    })



} else {
    let titrePanier = document.getElementById('titrePanier');
    titrePanier.innerHTML = 'Votre panier est vide!'
}