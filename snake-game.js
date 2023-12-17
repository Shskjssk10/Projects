//Snake Food 
const playBoard = document.querySelector(".play-board");

let foodXCoords, foodYCoords;
let snakeXCoords = 16, snakeYCoords = 16;
let snakeVelocityX = 0, snakeVelocityY = 0;
let snakeBody = [];

const changeFoodPosition = () => {
    foodXCoords = Math.floor(Math.random() * 31) + 1;
    foodYCoords = Math.floor(Math.random() * 31) + 1;
}

const changeDirection = (e) => {
    if (e.key === "ArrowUp" || e.key ==="w"){
        snakeVelocityX = 0;
        snakeVelocityY = -1;
    } else if (e.key === "ArrowDown" || e.key === "s"){
        snakeVelocityX = 0;
        snakeVelocityY = 1;
    } else if (e.key === "ArrowRight" || e.key === "d"){
        snakeVelocityX = 1;
        snakeVelocityY = 0;
    } else if (e.key === "ArrowLeft" || e.key === "a"){
        snakeVelocityX = -1;
        snakeVelocityY = 0;
    }
    initGame();
}

const initGame = () => {
    let foodHtmlMarkup = `<div class="food" style="grid-area: ${foodYCoords} / ${foodXCoords}"></div>`;
    foodHtmlMarkup += `<div class="snake" style="grid-area: ${snakeYCoords} / ${snakeXCoords}"></div>`;

    // Checks to see if the snake has hit the food
    if (snakeXCoords === foodXCoords && snakeYCoords === foodYCoords){
        changeFoodPosition();
        snakeBody.push([foodXCoords, foodYCoords]); //Pushes food position to snake's body.
    }


    //19:31



    for (let i = snakeBody.length -1; i > 0; i--){
        // Shifts the values of elements in snake body by one forward
        snakeBody[i] = snakeBody[i-1];
    }

    snakeBody[0] = [snakeXCoords, snakeYCoords];

    // Updates snake's direction
    snakeXCoords += snakeVelocityX;
    snakeYCoords += snakeVelocityY;

for (let i = 0; i < snakeBody.length; i++){
    // Adds a div for each part of the snake's body.
    foodHtmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
}

    playBoard.innerHTML = foodHtmlMarkup;
}
changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection)

 
// for (let i = 0; i< 100; i++){
//     X = Math.floor(Math.random() * 30) + 1;
//     if (X ==0){
//         console.log("The number is 0!!!");
//     }
//     else{ 
//         console.log(X);
//     }
// }
