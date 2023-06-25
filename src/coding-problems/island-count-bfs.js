const count_islands = (matrix) => {
    let noOfIslands = 0
    for(let row=0; row<matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            if(matrix[row][column] === 1) {
                noOfIslands++
                visit_islands(matrix, row, column)
            }
        }
    }
    return noOfIslands
}

const visit_islands = (matrix, x, y) => {
    const neighbours = [[x,y]]
    while(neighbours.length > 0) {
        let neighbour = neighbours.shift()
        let i = neighbour[0]
        let j = neighbour[1]
        // console.log(i, j)
        if(i>matrix.length-1 || j>matrix[0].length-1 || i<0 || j<0) {
            continue
        }
        
        else if(matrix[i][j] === 0) {
            continue
        }
        if(matrix[i][j] === 1) {
            matrix[i][j] = 0 // converting land into water
        }

        neighbours.push([i+1,j]) // 1, 0
        neighbours.push([i-1,j]) // -1, 0
        neighbours.push([i,j+1]) // 0, 1
        neighbours.push([i,j-1]) // 0 -1  
    }
}


console.log(count_islands([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ]));
  console.log(count_islands([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
  ]));


