class AddPets {
    constructor() {
        this.newRow;
        this.btnAddPet = document.querySelector(".addpet");
        this.pseudoValue = document.getElementById("pseudo");
        this.breedValue = document.getElementById("breed");
        this.resultBreed;
        this.resultPseudo;
        this.newIndice = 10;
        this.avatar;
    }

    // Function that displays the values of the inupts in a new row

    callInputValues() {

        // Listening the buttons inuputs

        this.pseudoValue.addEventListener("input", (event) => {
            this.resultPseudo = this.pseudoValue.value;
            event.preventDefault();
        })
        this.breedValue.addEventListener("input", (event) => {
            this.resultBreed = this.breedValue.value;
            event.preventDefault();
        })

        // Listening the button ADD PET

        this.btnAddPet.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.pseudoValue.value === "" && this.breedValue.value === "") {
                alert("Please enter the values in the fields");
            } else {
                this.newIndice++;
                this.newRow = document.createElement("div");
                this.newRow.className = "rowOfNewPet";
                morePets.appendChild(this.newRow);

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
                        // Display index that increase from 11
                        indexBox.innerHTML = this.newIndice;
                    }
                    // Box for avatar
                    for (let box = 0; box < 1; box++) {
                        const avatarBox = document.createElement("div");
                        avatarBox.className = "avatar";
                        firstBox.appendChild(avatarBox);
                        // Display avatar
                        avatarBox.innerHTML = "   ";

                        // Box for name
                        for (let box = 0; box < 1; box++) {
                            const nameBox = document.createElement("div");
                            nameBox.className = "name";
                            firstBox.appendChild(nameBox);
                            // Display name in the rows
                            nameBox.innerHTML = this.pseudoValue.value;
                        }
                        // Box for breed
                        for (let box = 0; box < 1; box++) {
                            const breedBox = document.createElement("div");
                            breedBox.className = "Breed";
                            firstBox.appendChild(breedBox);
                            // Display race in the rows
                            breedBox.innerHTML = this.breedValue.value;
                        }
                    }
                    // second box for delete button
                    for (let box = 0; box < 1; box++) {
                        const secondBox = document.createElement("div");
                        secondBox.className = "delete";
                        this.newRow.appendChild(secondBox);
                        secondBox.innerHTML = "Delete";
                    }
                }
            }
        })
    }
}
 
// Instantiation
const addPets = new AddPets();
addPets.callInputValues();