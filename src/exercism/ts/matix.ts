class Matrix {
  private rowMatrix: number[][] = []
  private columnMatrix: number[][] = []
  constructor(values: string) {
    let i = 0
    for (let row of values.split('\n')) {
      const rowArr = row.split(' ')
      this.rowMatrix.push(row.split(' ').map((x) => parseInt(x)))
      console.log(this.rowMatrix)
      for (let column = 0; column < this.rowMatrix[i].length; column++) {
        if (this.columnMatrix[column] === undefined) {
          this.columnMatrix[column] = []
        }
        this.columnMatrix[column].push(this.rowMatrix[i][column])
      }

      i++
    }
    console.log(this.columnMatrix)
  }

  get rows(): number[][] {
    return this.rowMatrix
  }

  get columns(): number[][] {
    return this.columnMatrix
  }
}
console.log(new Matrix('1').rows[0])
console.log(new Matrix('1').columns[0])
console.log(new Matrix('1 2\n3 4').rows[1])
console.log(new Matrix('1 2\n3 4').columns[1])
console.log(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3])
