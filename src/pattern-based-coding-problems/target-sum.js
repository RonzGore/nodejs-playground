const findPair = (arr, k) => {
   let left =  0
   let right = arr.length - 1
   let pair = [-1, -1] 
   while(left < right) {
     if(arr[left]+arr[right] === k) {
        pair = [left, right]
        break
     } else if(arr[left] + arr[right] > k) {
        right--
     } else {
        left++
     }
   }
   return pair
}                          

console.log(findPair([1, 2, 3, 4, 6], 6))
console.log(findPair([1, 2, 3, 4, 6], 5))
console.log(findPair([1, 2, 3, 4, 6], 11))
console.log(findPair([2, 5, 9, 11], 11))
console.log(findPair([0, 5, 9, 11], 11))