const container = document.querySelector(".container");

changeSides();

function changeSides(sides = 16) {
    for (let i=0; i<(sides*sides); i++) {
        createDiv(sides);
    }
}

function createDiv(sides) {
    const createDiv = document.createElement("div");
    container.appendChild(createDiv);
    let squareWidth = (100/sides);
    let squarePercent = squareWidth + "%";
    createDiv.style.flexBasis = squarePercent;

    createDiv.addEventListener("mouseover", function() {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let rgb = "rgb("+r+","+g+","+b+")";
        if (createDiv.style.backgroundColor == 0) {
            createDiv.style.backgroundColor = rgb;
            createDiv.style.opacity = .1;
        }
        else {
            createDiv.style.opacity = Number(createDiv.style.opacity)+0.1;
        }
    });
}

function removeDiv() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", numberOfSides);

function numberOfSides() {
    let sides = prompt("Please enter a number:", "From 1-100");
    if (sides > 0 && sides <101) {
        removeDiv();
        changeSides(sides);
    }
}