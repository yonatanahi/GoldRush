class GoldRush extends Matrix{
    constructor(rows, columns){
        super(rows, columns)
        this.rows = rows
        this.columns = columns
        this.alter(0, 0, 1)
        this.alter(rows - 1,columns - 1, 2)
        this.number = Math.floor(rows * columns * 0.25)
        //rows * columns / (rows + columns)
        
        this.addCoins(rows, columns, this.number) 
        this.addWalls(rows, columns, this.number) 
        this.player1 = {score: 0}
        this.player2 = {score: 0}
    }

    movePlayer(playerNum, direction){
        let coords = this.findCoordinate(playerNum)
        let rowNum = coords.rowNum
        let colNum = coords.colNum
        
        if(direction === 'down'){
            if(rowNum + 1 < this.rows && this.get(rowNum + 1, colNum) != 'wall'){                
                if(this.get(rowNum + 1, colNum) === 'coin'){this.addScore(playerNum)}
                this.alter(rowNum + 1, colNum, playerNum)        
                this.alter(rowNum, colNum, '')                
            }

        }else if(direction === 'up'){
            if(rowNum - 1 >= 0 && this.get(rowNum - 1, colNum) != 'wall'){
                if(this.get(rowNum - 1, colNum) === 'coin'){this.addScore(playerNum)}
                this.alter(rowNum - 1, colNum, playerNum)
                this.alter(rowNum, colNum, '')
            }
        }else if(direction === 'right'){
            if(colNum + 1 < this.columns && this.get(rowNum, colNum + 1) != 'wall'){
                if(this.get(rowNum, colNum + 1) === 'coin'){this.addScore(playerNum)}
                this.alter(rowNum, colNum + 1, playerNum)
                this.alter(rowNum, colNum, '')
            }
        }else if(direction === 'left'){
            if(colNum - 1 >= 0 && this.get(rowNum, colNum - 1) != 'wall'){
                if(this.get(rowNum, colNum - 1) === 'coin'){this.addScore(playerNum)}
                this.alter(rowNum, colNum - 1, playerNum)
                this.alter(rowNum, colNum, '')
            }
        }
    }

    addCoins(rows, columns, num){
        for(let i = 0; i < num; i++){
            let rowNum = Math.floor(Math.random() * rows)
            let colNum = Math.floor(Math.random() * columns)
            let cellValue = this.get(rowNum, colNum)
            if(cellValue === ''){
                this.alter(rowNum, colNum, 'coin')
            }else{
                i--
            }
            
        }
    }

    addWalls(rows, columns, num){
        for(let i = 0; i < num; i++){
            let rowNum = Math.floor(Math.random() * rows)
            let colNum = Math.floor(Math.random() * columns)
            let cellValue = this.get(rowNum, colNum)
            if(cellValue === ''){
                this.alter(rowNum, colNum, 'wall')
            }else{
                i--
            }
            
        }
    }

    addScore(playerNum){
        if(playerNum === 1){
            this.player1.score += 10

        }else if(playerNum === 2){
            this.player2.score += 10
        }
    }

    checkScore(score1, score2){
        let most = Math.floor(0.66*this.number) * 10    
        if(score1 >= most){
            alert('The winner is Player 1!')
        }else if(score2 >= most){
            alert('The winner is Player 2!')
        }
    }
}
