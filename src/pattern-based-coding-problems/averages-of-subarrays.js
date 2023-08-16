// const find_averages_of_subarrays = (k, arr)=> {
//     let result = []
//     let windowSum = 0.0
//     let windowStart = 0
//     let windowEnd = 0
//     while(windowEnd<=arr.length) {
//         if(windowEnd<k) {
//             windowSum += arr[windowEnd]
//             windowEnd++
//             continue
//         }
//         result.push(windowSum/k)
//         windowSum -= arr[windowStart]
//         windowSum += arr[windowEnd]
//         windowStart++
//         windowEnd++
//     }
//     return result
// }

const find_averages_of_subarrays = (k, arr)=> {
    let result = []
    let windowSum = 0.0
    let windowStart = 0
    let windowEnd = 0
    while(windowEnd<arr.length) {
        windowSum += arr[windowEnd]
        console.log(windowSum)
        if(windowEnd >= k-1) {
            result.push(windowSum/k)
            windowSum -= arr[windowStart]
            windowStart++
        }
        windowEnd++
    }
    return result
}




const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
console.log(`Averages of subarrays of size K: ${result}`)