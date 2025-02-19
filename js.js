const container = document.querySelector(".container");

function createDiv() {
    const createDiv = document.createElement("div");
    container.appendChild(createDiv);
}

for (let i=0; i<(16*16); i++) {
    createDiv();
}

const button = document.querySelector("button");
button.addEventListener("click", numberOfSides);


