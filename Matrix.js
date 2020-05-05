class Matrix{
    constructor(rows, columns){
        this.matrix = this.generateMatrix(rows, columns)
    }

    generateMatrix(rows, columns){
        let matrix = []
        for (let r = 0; r < rows; r++) {
            let row = []
            for (let c = 0; c < columns; c++) {
                row.push('')
            }
            matrix.push(row)
        }
        return matrix
    }


    get(rowNum, colNum){
        return this.matrix[rowNum][colNum]
    }

    print(){
        for (let r = 0; r < this.matrix.length; r++) {
            let str = ''
            for (let c = 0; c < this.matrix[0].length; c++) {
                str += this.get(r, c) +'\t'
            }
            console.log(str);
            
        }
    }

    alter(rowNum, colNum, updatedValue){
        this.matrix[rowNum][colNum] = updatedValue
        console.log({rowNum, colNum})
    }

    findCoordinate(value){
        for (let r = 0; r < this.matrix.length; r++) {
            for (let c = 0; c < this.matrix[r].length; c++) {
                if(this.matrix[r][c] === value){
                    return {rowNum: r, colNum: c}
                }                
            }
        }
    }
}



