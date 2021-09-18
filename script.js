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
    }

    const boardPlay = (i,j,value) => {
        if (!gameBoard[i][j]){
            gameBoard[i][j] = value;
        }
    }

    const displayBoard = () => {
        console.log(gameBoard);
    }

    return { displayBoard, clearBoard, boardPlay }
}

const
