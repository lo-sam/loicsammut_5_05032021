// récupération de l'ID dans l'URL //
let idUrl = window.location.search.substr(4);
console.log(idUrl);

// récupération du produit à qui appartient l'ID dans la base de l'API //
const promise = fetch('http://localhost:3000/api/teddies/' + idUrl);
promise.then(response => {
    const oursSelect = response.json();
    console.log(oursSelect);

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
        console.log(ours.colors);
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
            ours.price + ' €';

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






        /*
                //////////// PANIER ////////////


                // on récupère l'évènement click du bouton AJOUTER AU PANIER
                let panier = document.getElementById('panier')
                panier.addEventListener('click', function() {
                    //incrémente le numéro de l'article dans le panier
                    let key = localStorage.length + 1;
                    //on crée un objet avec le nom, l image et le prix du produit ajouté au panier
                    let produit = {
                            nom: ours.name,
                            img: ours.imageUrl,
                            prix: ours.price,
                            id: idUrl
                        }
                        //on remet en ligne le résultat JSON
                    let produitLine = JSON.stringify(produit);
                    //on ajoute un article dans le local storage
                    localStorage.setItem(`Article ${key}`, produitLine);
                    //on recharge la page
                    document.location.reload();
                });*/

        //////////// TEST PANIER ////////////


        // on récupère l'évènement click du bouton AJOUTER AU PANIER
        let panier = document.getElementById('panier')
        panier.addEventListener('click', function() {
            //incrémente le numéro de l'article dans le panier
            let key = localStorage.length + 1;
            //on crée un objet avec le nom, l image et le prix du produit ajouté au panier

            if (localStorage.getItem(ours.name) === null) {
                let produit = {
                        nom: ours.name,
                        img: ours.imageUrl,
                        prix: ours.price,
                        id: idUrl,
                        quantité: 1
                    }
                    //on remet en ligne le résultat JSON
                let produitLine = JSON.stringify(produit);
                //on ajoute un article dans le local storage
                localStorage.setItem(ours.name, produitLine);

            } else {
                produit = JSON.parse(localStorage.getItem(ours.name));
                console.log(produit)
                Object.entries(produit).forEach(([quantité]) => {

                    quantité = quantité + 1;
                });

                //on remet en ligne le résultat JSON
                let produitLine = JSON.stringify(produit);
                //on ajoute un article dans le local storage
                localStorage.setItem(ours.name, produitLine);

            }
            //on recharge la page
            // document.location.reload();
        });





    })


});