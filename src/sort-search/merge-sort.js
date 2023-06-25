const mergeArrays = (arr1, arr2) => {
    let mergedArray = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }
    if(i < arr1.length) {
        mergedArray.push(...arr1.slice(i))
    } 
    if(j < arr2.length) {
        mergedArray.push(...arr2.slice(j))
    }
    return mergedArray
}

// console.log(mergeArrays([22, 36, 49, 56], [1, 11, 20, 58, 101]))

const mergeSort = (arr) => {
    if(arr.length === 1) {
        return arr
    }
    let midOfArray = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, midOfArray))
    let right = mergeSort(arr.slice(midOfArray))
    return mergeArrays(left, right)
}

console.log(mergeSort([36, 49, 22, 56, 11, 20, 101, 58, 1]))
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))