class Api {
    constructor() {
        this.responses;
        this.result;
        this.newRow;
        this.delete;
    }

    getApi() {
        //Envoi de la requete, récuperation, et affichage des données de l'API
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                this.responses = JSON.parse(this.responseText);
                // console.log(this.responses.collection);
                // console.log(this.responses);
                // Création d'une div class="row" pour chaque tableau collection de l'API
                for (let i = 0; i < this.responses.collection.length; i++) {
                    this.newRow = document.createElement("div");
                    this.delete = document.createElement("div")
                    this.newRow.className = "row";
                    this.delete.className = "delete";
                    list.appendChild(this.newRow);
                    newRow.appendChild(this.delete);
                    // Affichage de 10 noms + races dans les rows
                    const response = this.responses.collection[i];
                    this.newRow.innerHTML =
                        response.resource.pseudo + " " + response.resource.breed.lib;
                    // this.delete.innerHTML =
                    //bouton de suppression;

                    // Modification du backgroundColor des 10 rangées
                    if (i === 0) {
                        this.newRow.style.backgroundColor = "#A8B32C";
                    } else if (i === 1) {
                        this.newRow.style.backgroundColor = "rgba(168, 179, 44, 0.25)";
                    } else if (i === 2) {
                        this.newRow.style.backgroundColor = "rgba(168, 179, 44, 0.1)";
                    } else {
                        this.newRow.style.backgroundColor = "#EFEEED";
                    }
                }
            }
        };

        request.open("GET", "https://api.yummypets.com/pets/page?limit=10");
        request.send();
    }
}

const api = new Api();
api.getApi();
// api.rowColors();

const list = document.querySelector("#list");

//   response.resource.breed.lib.style.fontStyle = "italic";