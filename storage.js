let products = JSON.parse(localStorage.getItem('products'));


////////////////////PANIER////////////////////
if (products) {
    let nbArticle = 0
    let prixTotalPanier = 0;
    for (let i = 0; i < products.length; i++) {

        //   for (i = 0; i < localStorage.length; i++) {
        let articlePanier = document.createElement('li');

        // insertion de l'image via l'API //
        let picBearPanier = document.createElement('img');
        picBearPanier.classList.add('pictedPanier');
        picBearPanier.setAttribute('src', products[i].image);

        // création du contenant pour afficher les infos //
        let oursInfoPanier = document.createElement('div');
        oursInfoPanier.classList.add('infoPanier');

        // Nom du produit //
        let oursNamePanier = document.createElement('div');
        oursNamePanier.classList.add('namePanier');
        oursNamePanier.textContent = 'Nom: ' +
            products[i].nom;


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
        oursQuantitéPanier.textContent = products[i].quantité;

        //bouton + quantité    
        let plusQuantitéPanier = document.createElement('input');
        plusQuantitéPanier.classList.add('plusQuantité');
        plusQuantitéPanier.setAttribute('type', 'submit');
        plusQuantitéPanier.setAttribute('value', '+');

        // couleur du produit //    
        let ourscouleurPanier = document.createElement('div');
        ourscouleurPanier.classList.add('couleurPanier');
        ourscouleurPanier.textContent = 'Couleur: ' +
            products[i].couleur;

        // prix du produit //
        let oursPricePanier = document.createElement('div');
        oursPricePanier.classList.add('pricePanier');
        let prixTotal = products[i].prix * products[i].quantité;
        oursPricePanier.textContent = 'Prix: ' +
            products[i].prix / 100 + '€' + ' unitaire, soit un total de: ' + prixTotal / 100 + '€';

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
        moinsQuantitéPanier.addEventListener('click', () => {
            //si la quantité tombe à zéro, on déactive le bouton
            if (products[i].quantité < 1) {
                moinsQuantitéPanier.setAttribute('disabled', 'true');
            } else {
                //sinon on réduit la quantité de 1
                moinsQuantitéPanier.removeAttribute('disabled');
                products[i].quantité = products[i].quantité - 1;
                localStorage.setItem('products', JSON.stringify(products));
            }
            //on recharge la page
            document.location.reload();
        });

        //on agit sur le click du bouton + pour augmenter le nb d'article d'1
        plusQuantitéPanier.addEventListener('click', () => {
            products[i].quantité = products[i].quantité + 1;
            localStorage.setItem('products', JSON.stringify(products));
            //on recharge la page
            document.location.reload();
        });

        //Affichage quantité sur l'icone panier
        nbArticle = nbArticle + products[i].quantité;
        let nbCmde = document.getElementById('nbCmde');
        nbCmde.style.visibility = 'visible';
        nbCmde.textContent = nbArticle;

        prixTotalPanier = (prixTotalPanier + prixTotal);
    }

    //Prix global du panier
    console.log(prixTotalPanier);
    prixTotalPanier = document.createElement('div');
    prixTotalPanier.id = 'prixTotalPanier';
    prixTotalPanier.textContent = 'Le total de votre commande est de: ' + prixTotalPanier + '€';
    document.getElementById('prixTotalPanierCmde').appendChild(prixTotalPanier);

    // bouton pour vider le panier
    let clearBtn = document.createElement('input');
    clearBtn.id = 'panier';
    clearBtn.setAttribute('type', 'submit');
    clearBtn.setAttribute('value', 'Vider le panier');

    document.getElementById('clear').appendChild(clearBtn);

    //on agit sur le click du bouton "vider le panier" pour supprimer le storage en cours
    clearBtn.addEventListener('click', () => {
        localStorage.clear('products', JSON.stringify(products));
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
    firstName.style.display = 'flex';
    firstName.style.flexDirection = 'row';
    firstName.innerHTML = ('Prénom: <p id=firstNameP></p>');

    //input de saisi du prénom
    let firstNameI = document.createElement('input');
    firstNameI.id = 'firstName';
    firstNameI.setAttribute('type', 'text');

    //label Nom
    let lastName = document.createElement('label');
    lastName.classList.add('lastName');
    lastName.setAttribute('for', 'lastName');
    lastName.style.display = 'flex';
    lastName.style.flexDirection = 'row';
    lastName.innerHTML = ('Nom: <p id=lastNameP></p>');

    //input de saisi du Nom
    let lastNameI = document.createElement('input');
    lastNameI.id = 'lastName';
    lastNameI.setAttribute('type', 'text');


    //label adresse
    let adress = document.createElement('label');
    adress.classList.add('adress');
    adress.setAttribute('for', 'adress');
    adress.style.display = 'flex';
    adress.style.flexDirection = 'row';
    adress.innerHTML = ('Adresse: <p id=adressP></p>');

    //input de saisi de l'adresse
    let adressI = document.createElement('input');
    adressI.id = 'adress';
    adressI.setAttribute('type', 'text');

    //label de la ville
    let city = document.createElement('label');
    city.classList.add('city');
    city.setAttribute('for', 'city');
    city.style.display = 'flex';
    city.style.flexDirection = 'row';
    city.innerHTML = ('Ville: <p id=cityP></p>');

    //input de saisi de la ville
    let cityI = document.createElement('input');
    cityI.id = 'city';
    cityI.setAttribute('type', 'text');

    //label adresse mail
    let mail = document.createElement('label');
    mail.classList.add('mail');
    mail.setAttribute('for', 'mail');
    mail.style.display = 'flex';
    mail.style.flexDirection = 'row';
    mail.innerHTML = ('adresse e-mail: <p id=mailP></p>');

    //input de saisi de l'adresse mail
    let mailI = document.createElement('input');
    mailI.id = 'mail';
    mailI.setAttribute('type', 'mail');

    //input de validation de formulaire
    let contact = document.createElement('input');
    contact.id = 'validCmdBtn';
    contact.setAttribute('type', 'submit');
    contact.setAttribute('value', 'Valider la commande');

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
    formulaire.appendChild(contact);



    /////////////////////////// VERIFICATION DES CHAMPS ///////////////////////////

    // on écoute les changements des inputs nom prenom adresse ville et mail
    //prenom
    firstNameI.addEventListener('change', function() {
        validFirstName(this);
    });
    //nom
    lastNameI.addEventListener('change', function() {
        validLastName(this);
    });
    //adresse
    adressI.addEventListener('change', function() {
        validAdress(this);
    });
    //ville
    cityI.addEventListener('change', function() {
        validCity(this);
    });
    //e-mail
    mailI.addEventListener('change', function() {
        validMail(this);
    });

    // on crée une expression régulière pour définir ce qui est autorisé à la saisie

    //prenom
    const validFirstName = function(inputfirstName) {
        let entreeReg = new RegExp(
            '[a-zA-Z]{2,15}$', 'g'
        );
        if (entreeReg.test(inputfirstName.value)) {
            firstNameP.style.color = '#55A500';
            firstNameP.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            firstNameP.style.color = '#A50000';
            firstNameP.innerHTML = 'Saisie non valide';

        }
    };
    //nom
    const validLastName = function(inputLastName) {
        let entreeReg = new RegExp(
            '[a-zA-Z]{2,15}$', 'g'
        );
        if (entreeReg.test(inputLastName.value)) {
            lastNameP.style.color = '#55A500';
            lastNameP.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            lastNameP.style.color = '#A50000';
            lastNameP.innerHTML = 'Saisie non valide';

        }
    };
    //adresse
    const validAdress = function(inputAdress) {
        let entreeReg = new RegExp(
            '[a-zA-Z0-9-]$', 'g'
        );
        if (entreeReg.test(inputAdress.value)) {
            adressP.style.color = '#55A500';
            adressP.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            adressP.style.color = '#A50000';
            adressP.innerHTML = 'Saisie non valide';

        }
    };
    //ville
    const validCity = function(inputCity) {
        let entreeReg = new RegExp(
            '[a-zA-Z]{2,15}$', 'g'
        );
        if (entreeReg.test(inputCity.value)) {
            cityP.style.color = '#55A500';
            cityP.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            cityP.style.color = '#A50000';
            cityP.innerHTML = 'Saisie non valide';

        }
    };
    //e-mail
    const validMail = function(inputMail) {
        let mailReg = new RegExp(
            '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
        );
        if (mailReg.test(inputMail.value)) {
            mailP.style.color = '#55A500';
            mailP.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            mailP.style.color = '#A50000';
            mailP.innerHTML = 'Adresse e-mail non valide';

        }
    };


    /////////////////////////// VALIDATION DU FORMULAIRE ///////////////////////////

    // Evenement d'ajout du bon de commande
    contact.addEventListener('click', (event) => {
        event.preventDefault();
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let adress = document.getElementById('adress').value;
        let city = document.getElementById('city').value;
        let email = document.getElementById('mail').value;
        //  bon de commande que l'on crée dans le tableau contact
        let bonDeCommande = {
            firstName: firstName,
            lastName: lastName,
            adress: adress,
            city: city,
            email: email,
            //products: localStorage.getItem('products')
        };
        // bonDeCommandes.push(bonDeCommande);
        localStorage.setItem('contact', JSON.stringify(bonDeCommande));
    })

    const facture = fetch('http://localhost:3000/api/teddies/order', {
        method: "POST",
        body: JSON.stringify(contact),
        Headers: {
            "Content-Type": "application/json",
        },
    });
    facture.then(async(response) => {
        try {
            console.log(response);
            const contenuFacture = await response.json();
            console.log(contenuFacture);
        } catch (e) {
            console.log(e);
        }
    });

} else {
    let titrePanier = document.getElementById('titrePanier');
    titrePanier.innerHTML = 'Votre panier est vide!'
}