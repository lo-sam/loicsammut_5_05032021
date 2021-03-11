const fetchChene = fetch('http://localhost:3000/api/furniture');

fetchChene.then(response => {
    return response.json();
}).then(listeFurniture => {
    listeFurniture.forEach(function(chene) {
        let furniture = document.createElement('li');
        let aFurniture = document.createElement('a');
        aFurniture.setAttribute('href', 'produit.html?id=' + chene._id)
        let picfurniture = document.createElement('img');
        picfurniture.classList.add('picted');
        picfurniture.setAttribute('src', chene.imageUrl);
        let oursInfo = document.createElement('div');
        oursInfo.classList.add('info');
        let oursName = document.createElement('div');
        oursName.classList.add('name');
        oursName.textContent = 'Nom: ' +
            chene.name;
        let oursDescriptionTitle = document.createElement('div');
        oursDescriptionTitle.classList.add('descriptionTitle');
        oursDescriptionTitle.textContent = 'Description: ';

        let oursDescription = document.createElement('div');
        oursDescription.classList.add('description');
        oursDescription.textContent = chene.description;
        let oursPrice = document.createElement('div');
        oursPrice.classList.add('price');
        oursPrice.textContent = 'Prix: ' +
            chene.price + ' €';


        aFurniture.appendChild(picfurniture);
        aFurniture.appendChild(oursInfo);
        oursInfo.appendChild(oursName);
        oursInfo.appendChild(oursDescriptionTitle);
        oursInfo.appendChild(oursDescription);
        oursInfo.appendChild(oursPrice);

        furniture.appendChild(aFurniture);

        document.getElementById('list_items').appendChild(furniture);
    })
});