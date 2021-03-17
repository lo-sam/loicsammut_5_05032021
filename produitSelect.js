let idUrl = window.location.search.substr(4);
console.log(idUrl);

const promise = fetch('http://localhost:3000/api/teddies/' + idUrl);
promise.then(response => {
    const oursSelect = response.json();
    console.log(oursSelect);

    oursSelect.then((ours) => {

        console.log(ours);

        let bear = document.createElement('div');
        bear.id = 'oursItem';
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

        let oursOptionLabel = document.createElement('label');
        oursOptionLabel.id = 'optionLabel';
        oursOptionLabel.innerHTML = 'Couleurs disponibles :';
        let oursOptionSelect = document.createElement('select');
        oursOptionSelect.id = 'colors';
        oursOptionSelect.setAttribute('name', ours.colors);
        console.log(ours.colors);
        for (let i = 0; i < ours.colors.length; i++) {
            let option = document.createElement('option');
            option.value = ours.colors[i];
            option.text = ours.colors[i];
            oursOptionSelect.appendChild(option);
            console.log(i);
        }

        let oursPrice = document.createElement('div');
        oursPrice.classList.add('price');
        oursPrice.textContent = 'Prix: ' +
            ours.price + ' €';

        let submitBtn = document.createElement('input');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('name', 'panier');
        submitBtn.setAttribute('value', 'Ajouter au panier');
        submitBtn.id = 'panier';

        bear.appendChild(picBear);
        bear.appendChild(oursInfo);
        oursInfo.appendChild(oursName);
        oursInfo.appendChild(oursDescriptionTitle);
        oursInfo.appendChild(oursDescription);
        oursInfo.appendChild(oursOptionLabel);
        oursInfo.appendChild(oursOptionSelect)
        oursInfo.appendChild(oursPrice);
        oursInfo.appendChild(submitBtn);

        document.getElementById('item').appendChild(bear);
    })

});