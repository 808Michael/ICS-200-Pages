let color = "black";
let isDrawing = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let board = document.querySelector(".board");

    board.addEventListener("mousedown", function(e) {
        isDrawing = true;
        colorDiv(e);
    });

    board.addEventListener("mouseup", function() {
        isDrawing = false;
    });

    board.addEventListener("mousemove", function(e) {
        if (isDrawing) {
            colorDiv(e);
        }
    });

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(e){
        let size = getSize();
        if(size) {
            createBoard(size);
        }
    });
});

function createBoard(size){
    let board = document.querySelector(".board");
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        board.appendChild(div);
    }
}

function getSize(){
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "Now you play!";
        return input;
    }
    return null;
}

function colorDiv(e){
    if (e.target.classList.contains('square')) {
        if (color == "random") {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            e.target.style.backgroundColor = color;
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll(".square");
    divs.forEach((div) => div.style.backgroundColor = "white");
}
