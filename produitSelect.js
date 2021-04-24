// récupération de l'ID dans l'URL //
let idUrl = window.location.search.substr(4);

// récupération du produit à qui appartient l'ID dans la base de l'API //
const promise = fetch('http://localhost:3000/api/teddies/' + idUrl);
promise.then(response => {
    const oursSelect = response.json();
    oursSelect.then((ours) => {
        console.log(ours);

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
        oursName.textContent = ours.name;

        // description du produit //
        let oursDescriptionTitle = document.createElement('div');
        oursDescriptionTitle.classList.add('descriptionTitle');
        oursDescriptionTitle.textContent = 'Description: ';
        let oursDescription = document.createElement('div');
        oursDescription.classList.add('description');
        oursDescription.textContent = ours.description;

        // création du label et du select pour sélectionner la couleur //
        let oursOptionLabel = document.createElement('label');
        oursOptionLabel.id = 'optionLabel';
        oursOptionLabel.innerHTML = 'Couleurs disponibles :';
        let oursOptionSelect = document.createElement('select');
        oursOptionSelect.id = 'colors';
        oursOptionSelect.setAttribute('name', ours.colors);

        // boucle où l'on ajoute un champ couleur pour chaque ligne du tableau colors //
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

        ///////////////////////////////////////// AJOUT AU PANIER /////////////////////////////////////////

        // Evénement d'ajout au panier
        const panier = document.getElementById('panier');
        panier.addEventListener('click', (event) => {
            event.preventDefault();

            //  produit que l'on crée dans le tableau panier
            let productId = {
                nom: ours.name,
                image: ours.imageUrl,
                prix: ours.price,
                quantité: 1,
                id: ours._id,
            };
            let product = JSON.parse(localStorage.getItem('product'));

            // fonction d'envois au panier
            const EnvoisDansLePanier = () => {
                product.push(productId);
                localStorage.setItem('product', JSON.stringify(product));
            };


            if (product) {
                //si il y a un produit dans le storage (produits=true)

                EnvoisDansLePanier();
            }
            // si pas produit dans storage
            else {
                //On crée un tableau product et on utilise notre fonction pour y ajouter l'article 
                product = [];
                EnvoisDansLePanier();
            }
            //on recharge la page
            document.location.reload();
        })
    })
});


// Affichage de la quantité d'article sur l'icône Panier
let product = JSON.parse(localStorage.getItem('product'));
if (product) {
    let nbArticle = 0
    for (let i = 0; i < product.length; i++) {
        nbArticle = nbArticle + product[i].quantité;
        let nbCmde = document.getElementById('nbCmde');
        nbCmde.style.visibility = 'visible';
        nbCmde.textContent = nbArticle;
    }
}