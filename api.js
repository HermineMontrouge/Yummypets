class Api {
    constructor() {
        this.responses;
        this.result;
        this.newRow;
        this.index;
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

                    // Changing the backgroundColor of the 10 rows
                    if (i === 0) {
                        this.newRow.style.backgroundColor = "#A8B32C";
                        this.newRow.style.color = "white";
                    } else if (i === 1) {
                        this.newRow.style.backgroundColor = "rgba(168, 179, 44, 0.25)";
                    } else if (i === 2) {
                        this.newRow.style.backgroundColor = "rgba(168, 179, 44, 0.1)";
                    } else {
                        this.newRow.style.backgroundColor = "#EFEEED";
                    }

                    // Add 5 boxes to put index, avatar, name, breed and delete button
                    for (let box = 0; box < 1; box++) {
                        const newBox = document.createElement("div");
                        newBox.className = "index";
                        this.newRow.appendChild(newBox);
                        // Display index that increase from 1 to 10
                        this.index = i + 1;
                        newBox.innerHTML = this.index + " ";
                    }

                    for (let box = 0; box < 1; box++) {
                        const newBox = document.createElement("div");
                        newBox.className = "avatar";
                        this.newRow.appendChild(newBox);
                        // Display avatar
                        newBox.innerHTML = "   ";
                    }
                    for (let box = 0; box < 1; box++) {
                        const newBox = document.createElement("div");
                        newBox.className = "name";
                        this.newRow.appendChild(newBox);
                        // Display 10 names in the rows
                        const response = this.responses.collection[i];
                        newBox.innerHTML = response.resource.pseudo;
                    }
                    for (let box = 0; box < 1; box++) {
                        const newBox = document.createElement("div");
                        newBox.className = "Breed";
                        this.newRow.appendChild(newBox);
                        // Display 10 races in the rows
                        const response = this.responses.collection[i];
                        newBox.innerHTML = response.resource.breed.lib;
                    }
                    for (let box = 0; box < 1; box++) {
                        const newBox = document.createElement("div");
                        newBox.className = "delete";
                        this.newRow.appendChild(newBox);
                        newBox.innerHTML = "delete";
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