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

                // Add 5 boxes to put index, avatar, name, breed and delete button
                for (let box = 0; box < 1; box++) {
                    const newBox = document.createElement("div");
                    newBox.className = "index";
                    this.newRow.appendChild(newBox);
                    // Display index that increase from 11
                    newBox.innerHTML = this.newIndice;
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
                    // Display name in the row
                    newBox.innerHTML = this.pseudoValue.value;
                }
                for (let box = 0; box < 1; box++) {
                    const newBox = document.createElement("div");
                    newBox.className = "Breed";
                    this.newRow.appendChild(newBox);
                    // Display race in the row
                    newBox.innerHTML = this.breedValue.value;
                }
                for (let box = 0; box < 1; box++) {
                    const newBox = document.createElement("div");
                    newBox.className = "delete";
                    this.newRow.appendChild(newBox);
                    newBox.innerHTML = "delete";
                }
            }
        })
    }
}

// Instantiation
const addPets = new AddPets();
addPets.callInputValues();