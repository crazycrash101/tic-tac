function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const Game = () => {
    let gameBoard = new Array(3);
    for(let i =0;i<3;i++){
        gameBoard[i] = new Array(3);
    }

    const clearBoard = () => {
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                gameBoard[i][j] = "";
            }
        }
        displayContents();
    }

    const boardPlay = (i,j,value) => {
        if (!gameBoard[i][j]){
            gameBoard[i][j] = value;
            displayContents();
        }
    }

    const displayBoard = () => {
        console.log(gameBoard);
    }


    return { gameBoard, displayBoard, clearBoard, boardPlay }
}
let newGame = Game();


function displayContents() {
    let gridContainer = document.querySelector('#gridContainer')
    removeAllChildNodes(gridContainer);
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
displayContents();


const Player = (name,symbol) => {
    let gridSquares = document.querySelectorAll('.gridSquares');
    
    if (symbol === 'X') {
        gridSquares.forEach(grid => {
            grid.addEventListener('click',e => {
                newGame.boardPlay(grid.dataset.rowNumber,grid.dataset.columnNumber,'X');
            })
        })
    } else if (symbol === "O") {
        gridSquares.forEach(grid => {
            grid.addEventListener('click',e => {
                newGame.boardPlay(grid.dataset.rowNumber,grid.dataset.columnNumber,'O');
            })
        })
    }
    
    return {name}
}
let player1 = Player('Sam','X');
let player2 = Player('Bot','O');

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click',e=> {
    newGame.clearBoard();
})


