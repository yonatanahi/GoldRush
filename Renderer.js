class Renderer{    
    constructor(){

    }

    renderBoard(matrix){
        $('#board').empty()
        let rows = matrix.length
        let columns = matrix[0].length
        document.documentElement.style.setProperty("--rowNum", rows);
        document.documentElement.style.setProperty("--colNum", columns);
        for(let r = 0; r < rows; r++){
            let spans = ''
            for(let j = 0; j < columns; j++){
                if(matrix[r][j] === 'coin'){
                    spans += `<span class = cell><img src="ten_agorot.jpeg" alt="coin" height="50" width="50"></span>` 
                }else if(matrix[r][j] === 'wall'){
                    spans += `<span class = "cell wall"></span>`
                }else if(matrix[r][j] === 1){
                    spans += `<span class = cell><img src="1.png" alt="player 1" height="60" width="60"></span>`
                }else if(matrix[r][j] === 2){
                    spans += `<span class = cell><img src="2.png" alt="player 2" height="50" width="50"></span>`
                }else{
                    spans += `<span class = cell>${matrix[r][j]}</span>`
                }
            }
            $('#board').append('<div>' + spans + '</div>')
        }
        
    }

    renderScores(score1, score2){
        $('#scores').empty()
        $('#scores').append(`<span id = score1>Player 1: ${score1}</span><span id = score2>Player 2:${score2}</span>`)
    }
}

