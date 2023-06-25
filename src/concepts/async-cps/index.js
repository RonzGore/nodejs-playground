// function addCps (a, b, callback) {
//     setTimeout(() => callback(a + b), 100)
// }
  
// console.log('before')
// addCps(1, 2, result => console.log(`Result: ${result}`))
// console.log('after')

console.log('before')
const result = ([1,5,10,15, 21]).map(el => {
    return el*2
})
console.log(result)
console.log('after')