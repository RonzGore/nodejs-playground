const getDigit = (num, place) => {
    return (Math.floor(Math.abs(num)/Math.pow(10, place)))%10
}

const getNumberOfDigits = (num) => {
    return (Math.floor(Math.log10(num)))+1
}

const countMostDigits = (arr) => {
    let mostDigits = 0
    for(let i=0; i<arr.length; i++) {
        let numOfDigits = getNumberOfDigits(arr[i])
        if(numOfDigits > mostDigits) {
            mostDigits = numOfDigits
        }
    }
    return mostDigits
}

console.log(Array.from({length:10}, () => []))


const radixSort = (arr) => {
    const mostDigits = countMostDigits(arr)
    for(let k=0;k<mostDigits;k++) {
        const digitBucket = Array.from({length:10}, () => [])
        for(let i = 0;i<arr.length;i++) {
            digitBucket[getDigit(arr[i], k)].push(arr[i])
        }
        console.log(digitBucket)
        arr = [].concat(...digitBucket)
    }
    
    return arr
}

console.log(radixSort([36, 49, 22, 56, 11, 20, 101, 58, 1]))
console.log(radixSort([0, 1, 0, 2, 1]))
console.log(radixSort([23, 345, 5467, 21, 11, 2345, 98521]))

// console.log(getDigit(86, 0))
// console.log(getDigit(86, 1))
// console.log(getDigit(86, 2))
// console.log(getDigit(86, 3))
// console.log(getDigit(86, 5))
// console.log(getDigit(86, 6))

// console.log(getNumberOfDigits(1))
// console.log(getNumberOfDigits(11))
// console.log(getNumberOfDigits(21))
// console.log(getNumberOfDigits(99))
// console.log(getNumberOfDigits(121))
// console.log(getNumberOfDigits(12345678901))

// console.log(countMostDigits([1, 11, 21, 99, 12345678910, 99, 121]))