function pair_with_target_sum(arr, targetSum) {
    // TODO: Write your code here
    let pair = [-1, -1]
    let leftPointer = 0
    let rightPointer = arr.length-1
    while(leftPointer<rightPointer) {
        if(arr[leftPointer]+arr[rightPointer] > targetSum) {
            rightPointer--
            continue
        } else if(arr[leftPointer]+arr[rightPointer] < targetSum) {
            leftPointer++
            continue
        } else {
            pair = [leftPointer, rightPointer]
            break
        }
    }
    return pair 
  }
  
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));
  