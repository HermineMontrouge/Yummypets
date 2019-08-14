class Api {
    constructor() {
        this.responses;
        this.newRow;
        this.index;
        this.btnDelete = document.querySelector(".delete");
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

                    // Changing the backgroundColor and font color of the rows
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

                    // Add 2 boxes to put a div for index, avatar, name, breed and a div for delete button
                    // First box for index, avatar, name and breed
                    for (let box = 0; box < 1; box++) {
                        const firstBox = document.createElement("div");
                        firstBox.className = "firstBox";
                        this.newRow.appendChild(firstBox);
                        // Box for index
                        for (let box = 0; box < 1; box++) {
                            const indexBox = document.createElement("div");
                            indexBox.className = "index";
                            firstBox.appendChild(indexBox);
                            // Display index that increase from 1 to 10
                            this.index = i + 1;
                            indexBox.innerHTML = this.index;
                        }
                        // Box for avatar
                        for (let box = 0; box < 1; box++) {
                            const avatarBox = document.createElement("div");
                            avatarBox.className = "avatar";
                            firstBox.appendChild(avatarBox);
                            // Display avatar
                            avatarBox.innerHTML = "   ";
                        }
                        // Box for name
                        for (let box = 0; box < 1; box++) {
                            const nameBox = document.createElement("div");
                            nameBox.className = "name";
                            firstBox.appendChild(nameBox);
                            // Display 10 names in the rows
                            const response = this.responses.collection[i];
                            nameBox.innerHTML = response.resource.pseudo;
                        }
                        // Box for breed
                        for (let box = 0; box < 1; box++) {
                            const breedBox = document.createElement("div");
                            breedBox.className = "Breed";
                            firstBox.appendChild(breedBox);
                            // Display 10 races in the rows
                            const response = this.responses.collection[i];
                            breedBox.innerHTML = response.resource.breed.lib;
                        }
                    }
                    // second box for delete button
                    for (let box = 0; box < 1; box++) {
                        const secondBox = document.createElement("div");
                        secondBox.className = "delete";
                        this.newRow.appendChild(secondBox);
                        secondBox.innerHTML = "Delete";
                    }
                    // selection of btn delete on the DOM
                    const btnDelete = document.querySelector(".delete");
                    // Listening of delete button
                    btnDelete.addEventListener("click", (event) => {
                        console.log(btnDelete);
                        list.splice(1, 0);
                    });
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