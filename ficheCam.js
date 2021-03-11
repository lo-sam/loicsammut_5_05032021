const fetchCam = fetch('http://localhost:3000/api/cameras');

fetchCam.then(response => {
    return response.json();
}).then(listeCameras => {
    listeCameras.forEach(function(cameras) {
        let cam = document.createElement('li');
        let aCam = document.createElement('a');
        aCam.setAttribute('href', 'produit.html?id=' + cameras._id)
        let picCam = document.createElement('img');
        picCam.classList.add('picted');
        picCam.setAttribute('src', cameras.imageUrl);
        let camInfo = document.createElement('div');
        camInfo.classList.add('info');
        let camName = document.createElement('div');
        camName.classList.add('name');
        camName.textContent = 'Nom: ' +
            cameras.name;
        let camDescriptionTitle = document.createElement('div');
        camDescriptionTitle.classList.add('descriptionTitle');
        camDescriptionTitle.textContent = 'Description: ';
        let camDescription = document.createElement('div');
        camDescription.classList.add('description');
        camDescription.textContent = cameras.description;
        let camPrice = document.createElement('div');
        camPrice.classList.add('price');
        camPrice.textContent = 'Prix: ' +
            cameras.price + ' €';


        aCam.appendChild(picCam);
        aCam.appendChild(camInfo);
        camInfo.appendChild(camName);
        camInfo.appendChild(camDescriptionTitle);
        camInfo.appendChild(camDescription);
        camInfo.appendChild(camPrice);

        cam.appendChild(aCam);

        document.getElementById('list_items').appendChild(cam);
    })
});