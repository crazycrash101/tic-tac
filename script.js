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
        }
        displayContents();
    }

    const displayBoard = () => {
        console.log(gameBoard);
    }


    return { gameBoard, displayBoard, clearBoard, boardPlay }
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
})

let gridSquares = document.querySelectorAll('.gridSquares');
gridSquares.forEach(grid => {
    grid.addEventListener('click',e => {
        newGame.boardPlay(Number(grid.dataset.rowNumber),Number(grid.dataset.columnNumber),'X');
    })
})

const Player = (name,symbol) => {
   
    
    if (symbol === 'X') {
        gridSquares.forEach(grid => {
            grid.addEventListener('click',e => {
                newGame.boardPlay(Number(grid.dataset.rowNumber),Number(grid.dataset.columnNumber),'X');
            })
        })
    }   else if (symbol === "O") {
        gridSquares.forEach(grid => {
            grid.addEventListener('click',e => {
                newGame.boardPlay(grid.dataset.rowNumber,grid.dataset.columnNumber,'O');
            })
        })
    }
    
    return {name}
}



