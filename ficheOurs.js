const fetchOurs = fetch('http://localhost:3000/api/teddies');

fetchOurs.then(response => {
    return response.json();
}).then(listeTeddies => {
    listeTeddies.forEach(function(ours) {
        let bear = document.createElement('li');
        let aBear = document.createElement('a');
        aBear.setAttribute('href', 'produit.html?id=' + ours._id)
        let picBear = document.createElement('img');
        picBear.classList.add('picted');
        picBear.setAttribute('src', ours.imageUrl);
        let oursInfo = document.createElement('div');
        oursInfo.classList.add('info');
        let oursName = document.createElement('div');
        oursName.classList.add('name');
        oursName.textContent = 'Nom: ' +
            ours.name;
        let oursDescriptionTitle = document.createElement('div');
        oursDescriptionTitle.classList.add('descriptionTitle');
        oursDescriptionTitle.textContent = 'Description: ';

        let oursDescription = document.createElement('div');
        oursDescription.classList.add('description');
        oursDescription.textContent = ours.description;
        let oursPrice = document.createElement('div');
        oursPrice.classList.add('price');
        oursPrice.textContent = 'Prix: ' +
            ours.price + ' €';


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




// Affichage Panier
let produits = JSON.parse(localStorage.getItem('panier'));

for (let i = 0; i < produits.length; i++) {
    let nbArticle = 0 + produits[i].quantité;
    let nbCmde = document.getElementById('nbCmde');
    nbCmde.style.visibility = 'visible';
    nbCmde.textContent = nbArticle;
}