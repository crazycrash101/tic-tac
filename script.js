const Game = () => {
    let gameOverStatus = false;
    let winner = "";
    let gameBoard = new Array(3);
    for(let i =0;i<3;i++){
        gameBoard[i] = new Array(3);
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameBoard[i][j] = "";
        }
    }

    const clearBoard = () => {
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                gameBoard[i][j] = "";
            }
        }
        gameOverStatus = false;
        displayContents();
    }

    const boardPlay = (row,col) => { 
        let xcount = 0; let ocount = 0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(gameBoard[i][j] === "X"){
                    xcount++
                }
            }
        }

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(gameBoard[i][j] === "O"){
                    ocount++
                }
            }
        }
        
        if (xcount === ocount){
            if (!gameBoard[row][col]){
                gameBoard[row][col] = 'X';
            }
        } else if (xcount === (ocount + 1)){
            if (!gameBoard[row][col]){
                gameBoard[row][col] = 'O';
            }
        }
        gameOverCheck();
        displayContents();
    }

    const dummyMove = (row,col) => {
        if (!gameBoard[row][col]){
            gameBoard[row][col] = ' ';
        }
    }

    const displayBoard = () => {
        console.log(gameBoard);
    }

    const gameOverCheck = (gameOverStatus) => {
        for(let i=0;i<3;i++){
            if ((gameBoard[i][0] === gameBoard[i][1])&&(gameBoard[i][0] === gameBoard[i][2])&&(gameBoard[i][0] != "")){
                gameOverStatus = true;
            }
            if ((gameBoard[0][i] === gameBoard[1][i])&&(gameBoard[0][i] === gameBoard[2][i])&&(gameBoard[0][i] != "")){
                gameOverStatus = true;
            }
        }
        if ((gameBoard[0][0] === gameBoard[1][1])&&(gameBoard[0][0] === gameBoard[2][2])&&(gameBoard[0][0] != "")){
            gameOverStatus = true;
        }
        if ((gameBoard[0][2] === gameBoard[1][1])&&(gameBoard[0][2] === gameBoard[2][0])&&(gameBoard[0][2] != "")){
            gameOverStatus = true;
        }
    
        let count = 0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(gameBoard[i][j] != "") {
                    count++
                }
            }
        }   
        if (count === 9) {
            gameOverStatus = true;
        }

    }
    return { gameBoard, displayBoard, clearBoard, boardPlay, dummyMove, gameOverStatus}
}
let newGame = Game();

function generateGrid() {
    let gridContainer = document.querySelector('#gridContainer')
    for (let i =0;i<3;i++){
        for (let j=0;j<3;j++){
            let newdiv = document.createElement('div');
            newdiv.classList.add('gridSquares');
            newdiv.dataset.rowNumber = `${i}`;
            newdiv.dataset.columnNumber = `${j}`
            gridContainer.appendChild(newdiv);
            newdiv.textContent = newGame.gameBoard[i][j];
        }
    }
}
generateGrid();

function displayContents() {
    let gridSquares = document.querySelectorAll('.gridSquares');
    gridSquares.forEach(grid => {
        let i = Number(grid.dataset.rowNumber);
        let j = Number(grid.dataset.columnNumber);
        grid.textContent = newGame.gameBoard[i][j];
    })
}

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click',e=> {
    newGame.clearBoard();
    h3.textContent = "";
})


let gridSquares  = document.querySelectorAll('.gridSquares');
let h3 = document.querySelector('h3');
gridSquares.forEach(grid => {
    grid.addEventListener('click', e => {
        console.log(newGame.gameOverStatus);
        if (!newGame.gameOverStatus) {
            newGame.boardPlay(Number(grid.dataset.rowNumber),Number(grid.dataset.columnNumber));
            if (newGame.gameOverStatus) {
                h3.textContent = "GAME OVER, PLAY AGAIN"
            }
        } else if (newGame.gameOverStatus){
            newGame.dummyMove(Number(grid.dataset.rowNumber),Number(grid.dataset.columnNumber));
        }
    })
})


// function gameOver () {
//     for(let i=0;i<3;i++){
//         if ((newGame.gameBoard[i][0] === newGame.gameBoard[i][1])&&(newGame.gameBoard[i][0] === newGame.gameBoard[i][2])&&(newGame.gameBoard[i][0] != "")){
//             return true
//         }
//         if ((newGame.gameBoard[0][i] === newGame.gameBoard[1][i])&&(newGame.gameBoard[0][i] === newGame.gameBoard[2][i])&&(newGame.gameBoard[0][i] != "")){
//             return true
//         }
//     }
//     if ((newGame.gameBoard[0][0] === newGame.gameBoard[1][1])&&(newGame.gameBoard[0][0] === newGame.gameBoard[2][2])&&(newGame.gameBoard[0][0] != "")){
//         return true
//     }
//     if ((newGame.gameBoard[0][2] === newGame.gameBoard[1][1])&&(newGame.gameBoard[0][2] === newGame.gameBoard[2][0])&&(newGame.gameBoard[0][2] != "")){
//         return true
//     }

//     let count = 0;
//     for(let i=0;i<3;i++){
//         for(let j=0;j<3;j++){
//             if(newGame.gameBoard[i][j] != "") {
//                 count++
//             }
//         }
//     }   
//     if (count === 9) {
//         return true
//     }

//     return false
// }


