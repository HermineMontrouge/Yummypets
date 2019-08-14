class Api {
    constructor() {
        this.responses;
        this.result;
        this.newRow;
        this.indice;
    }

    getApi() {
        // Instantiation of the javascript object XMLHttpRequest()
        const request = new XMLHttpRequest();
        // Get the result of the query
        request.onreadystatechange = function () {
            // check query is done 
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                this.responses = JSON.parse(this.responseText);
                // Creating a div class = "row" for each array "collection" of API 
                for (let i = 0; i < this.responses.collection.length; i++) {
                    this.newRow = document.createElement("div");
                    this.newRow.className = "row";
                    list.appendChild(this.newRow);
                    // Display of indices that increase from 1 to 10
                    this.indice = i + 1;
                    // Display 10 names + races in the rows
                    const response = this.responses.collection[i];
                    this.newRow.innerHTML =
                        this.indice + " " + response.resource.pseudo + " " + response.resource.breed.lib;
                    console.log(response);
                    // Changing the backgroundColor of the 10 rows
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

        // recovery of API data thanks to the get method
        request.open("GET", "https://api.yummypets.com/pets/page?limit=10");
        request.send();
    }
}

// Instantiation

const api = new Api();
api.getApi();

// Selection of elements on the dom

const list = document.querySelector("#list");