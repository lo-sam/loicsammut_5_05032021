// Récupération des données de l'API
const fetchOurs = fetch('http://localhost:3000/api/teddies');
// Réponse de la requête faite à l'API
fetchOurs.then(response => {
    console.log(response.status)
    return response.json();
    // Fonction qui pour chaque ligne du tableau va créér les éléments de notre page
}).then(listeTeddies => {
    console.log('résultat listeTeddies')
    console.log(listeTeddies);
    listeTeddies.forEach(function(ours) {
        //on crée une liste
        let bear = document.createElement('li');
        //on crée un lien
        let aBear = document.createElement('a');
        //Ajout de l'ID du produit sélectionné à la suite de l'URL de notre page produit.html pour ouvrir la fiche du produit sélectionné
        aBear.setAttribute('href', 'produit.html?id=' + ours._id)
            //on récupère l'image via l'API
        let picBear = document.createElement('img');
        picBear.classList.add('picted');
        picBear.setAttribute('src', ours.imageUrl);
        let oursInfo = document.createElement('div');
        oursInfo.classList.add('info');
        //on récupère le nom via l'API
        let oursName = document.createElement('div');
        oursName.classList.add('name');
        oursName.textContent = 'Nom: ' +
            ours.name;
        let oursDescriptionTitle = document.createElement('div');
        oursDescriptionTitle.classList.add('descriptionTitle');
        oursDescriptionTitle.textContent = 'Description: ';
        //on récupère la description via l'API
        let oursDescription = document.createElement('div');
        oursDescription.classList.add('description');
        oursDescription.textContent = ours.description;
        //on récupère le prix via l'API
        let oursPrice = document.createElement('div');
        oursPrice.classList.add('price');
        oursPrice.textContent = 'Prix: ' +
            ours.price / 100 + ' €';


        aBear.appendChild(picBear);
        aBear.appendChild(oursInfo);
        oursInfo.appendChild(oursName);
        oursInfo.appendChild(oursDescriptionTitle);
        oursInfo.appendChild(oursDescription);
        oursInfo.appendChild(oursPrice);


        bear.appendChild(aBear);

        document.getElementById('list_items').appendChild(bear);
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