// récupération de l'ID dans l'URL //
let idUrl = window.location.search.substr(4);

// récupération du produit à qui appartient l'ID dans la base de l'API //
const promise = fetch('http://localhost:3000/api/teddies/' + idUrl);
promise.then(response => {
    const oursSelect = response.json();

    oursSelect.then((ours) => {

        // création du contenant où l'article apparaitra //
        let bear = document.createElement('div');
        bear.id = 'oursItem';

        // insertion de l'image via l'API //
        let picBear = document.createElement('img');
        picBear.classList.add('picted');
        picBear.setAttribute('src', ours.imageUrl);

        // création du contenant pour afficher les infos //
        let oursInfo = document.createElement('div');
        oursInfo.classList.add('info');

        // Nom du produit //
        let oursName = document.createElement('div');
        oursName.classList.add('name');
        oursName.textContent = 'Nom: ' +
            ours.name;

        // description du produit //
        let oursDescriptionTitle = document.createElement('div');
        oursDescriptionTitle.classList.add('descriptionTitle');
        oursDescriptionTitle.textContent = 'Description: ';
        let oursDescription = document.createElement('div');
        oursDescription.classList.add('description');
        oursDescription.textContent = ours.description;

        // création du label et du select pour selectionner la couleur //
        let oursOptionLabel = document.createElement('label');
        oursOptionLabel.id = 'optionLabel';
        oursOptionLabel.innerHTML = 'Couleurs disponibles :';
        let oursOptionSelect = document.createElement('select');
        oursOptionSelect.id = 'colors';
        oursOptionSelect.setAttribute('name', ours.colors);

        // boucle où on ajoute un champ couleur pour chaque ligne du tableau colors //
        for (let i = 0; i < ours.colors.length; i++) {
            let option = document.createElement('option');
            option.value = ours.colors[i];
            option.text = ours.colors[i];
            oursOptionSelect.appendChild(option);
        }

        // prix du produit //
        let oursPrice = document.createElement('div');
        oursPrice.classList.add('price');
        oursPrice.textContent = 'Prix: ' +
            ours.price / 100 + ' €';

        // les enfants appartenant à bear //
        bear.appendChild(picBear);
        bear.appendChild(oursInfo);
        oursInfo.appendChild(oursName);
        // les enfants appartenant à oursInfo //
        oursInfo.appendChild(oursDescriptionTitle);
        oursInfo.appendChild(oursDescription);
        oursInfo.appendChild(oursOptionLabel);
        oursInfo.appendChild(oursOptionSelect)
        oursInfo.appendChild(oursPrice);

        // bear est enfant de item //
        document.getElementById('item').appendChild(bear);


        // Evenement d'ajout au panier
        const panier = document.getElementById('panier');
        panier.addEventListener('click', (event) => {
            event.preventDefault();

            //  produit que l'on crée dans le tableau panier
            let productId = {
                nom: ours.name,
                image: ours.imageUrl,
                couleur: oursOptionSelect.value,
                prix: ours.price,
                quantité: 1,
                id: ours.id,
            };
            let products = JSON.parse(localStorage.getItem('products'));

            // function d'envois au panier
            const EnvoisDansLePanier = () => {
                products.push(productId);
                localStorage.setItem('products', JSON.stringify(products));
            };

            //si produit dans storage (produits=true)
            if (products) {
                for (let i = 0; i < products.length; i++) {
                    let nomSelect = products[i].nom;
                    let couleurSelect = products[i].couleur;

                    if (ours.name !== nomSelect) {
                        //si l'article est différent
                        EnvoisDansLePanier();

                    } else if ((ours.name === nomSelect) && (couleurSelect !== oursOptionSelect.value)) {
                        //si meme nom mais couleur differente, on ajoute l article au panier
                        EnvoisDansLePanier();


                    } else if ((ours.name && oursOptionSelect.value) === (nomSelect && couleurSelect)) {
                        // Si le nom de l'article est déjà dans le panier et que la couleur est identique
                        //on ajoute 1 à sa quantité
                        products[i].quantité = products[i].quantité + 1;
                        localStorage.setItem('products', JSON.stringify(products));
                        break;
                    }
                }
            }
            // si pas produit dans storage
            else {
                products = [];
                EnvoisDansLePanier();
            }

            //on recharge la page
            document.location.reload();
        })
































    })


});


// Affichage Panier
let products = JSON.parse(localStorage.getItem('products'));
if (products) {
    let nbArticle = 0
    for (let i = 0; i < products.length; i++) {
        nbArticle = nbArticle + products[i].quantité;
        let nbCmde = document.getElementById('nbCmde');
        nbCmde.style.visibility = 'visible';
        nbCmde.textContent = nbArticle;
    }
}