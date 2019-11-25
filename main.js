function Start(){
    let rowsNum = Number($('#rows').val())
    let colsNum = Number($('#columns').val())
    let board = new GoldRush(rowsNum, colsNum)
    let renderer = new Renderer()
    renderer.renderBoard(board.matrix)
    renderer.renderScores(board.player1.score, board.player2.score)

    $(document).keypress(function (e) {
        switch (e.key) {
            case 'd': //right
                board.movePlayer(1, "down")            
                break
    
            case 's': //down
                board.movePlayer(1, "right")
                break
    
            case 'w': //up
                board.movePlayer(1, "left")
                break
    
            case 'a': //left
                board.movePlayer(1, "up")
                break
    
            case 'j': //left
                board.movePlayer(2, "up")
                break
    
            case 'l': //right
                board.movePlayer(2, "down")
                break
    
            case 'k':
                board.movePlayer(2, "right")
                break
    
            case 'i':
                board.movePlayer(2, "left")
                break
        }
    
        renderer.renderBoard(board.matrix)
        renderer.renderScores(board.player1.score, board.player2.score) 
        board.checkScore(board.player1.score, board.player2.score)   
       
    })
}


$('#start').click(function(){
    Start()
})







