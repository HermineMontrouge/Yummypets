//on veut récupérer les valeurs saisies dans les inputs pseudo et breed et au click de addpet que ca créé une row qui les affiche
class AddPets {
    constructor() {
        this.newRow;
        this.btnAddPet = document.querySelector(".addpet");
        this.pseudoValue = document.getElementById("pseudo");
        this.breedValue = document.getElementById("breed");
        this.resultBreed;
        this.resultPseudo;
        this.pseudoValue;
    }

    //fonction qui affiche les valeurs des inupts dans une nouvelle row

    callInputValues() {

        // Listening the buttons inuputs

        this.pseudoValue.addEventListener("input", (event) => {
            this.resultPseudo = this.pseudoValue.value;
            event.preventDefault();
            console.log(this.resultPseudo);
        })
        this.breedValue.addEventListener("input", (event) => {
            this.resultBreed = this.breedValue.value;
            event.preventDefault();
            console.log(this.resultBreed);
        })

        // Listening the button ADD PET
        this.btnAddPet.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.pseudoValue.value === "" && this.breedValue.value === "") {
                alert("Please enter the values in the fields");
            } else {
                this.newRow = document.createElement("div");
                this.newRow.className = "rowOfNewPet";
                morePets.appendChild(this.newRow);
                this.newRow.innerHTML = this.resultPseudo + " " + this.resultBreed;
                console.log("===")
            }
        })
    }
}

// Instantiation
const addPets = new AddPets();
addPets.callInputValues();