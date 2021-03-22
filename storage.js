const promise = fetch('http://localhost:3000/api/teddies/');
promise.then(response => {
    const oursSelect = response.json();

    oursSelect.then((ours) => {
        console.log(localStorage);

        store = localStorage.getItem(ours.name);

        for (i = 0; i < localStorage.length; i++) {
            let articlePanier = document.createElement('li');
            // insertion de l'image via l'API //
            let picBearPanier = document.createElement('img');
            picBearPanier.classList.add('pictedPanier');
            picBearPanier.setAttribute('src', ours.name);
            // création du contenant pour afficher les infos //
            let oursInfoPanier = document.createElement('div');
            oursInfoPanier.classList.add('infoPanier');
            // Nom du produit //
            let oursNamePanier = document.createElement('div');
            oursNamePanier.classList.add('namePanier');
            oursNamePanier.textContent = 'Nom: ' +
                localStorage.getItem('nom');
            // prix du produit //
            let oursPricePanier = document.createElement('div');
            oursPricePanier.classList.add('pricePanier');
            oursPricePanier.textContent = 'Prix: ' +
                localStorage.getItem('prix') + ' €';

            // les enfants appartenant à bear //
            articlePanier.appendChild(picBearPanier);
            articlePanier.appendChild(oursInfoPanier);
            oursInfoPanier.appendChild(oursNamePanier);
            oursInfoPanier.appendChild(oursPricePanier);
            document.getElementById('panierClient').appendChild(articlePanier);
        }

    })
})