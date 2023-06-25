function solution(a) {
    const freqMap = new Map()
    
    for(let i=0; i< a.length; i++) {
        let tenthPlace = a[i]%10
        let onthPlace = Math.floor(a[i]/10)
        
        if(freqMap.has(tenthPlace)) {
            value = freqMap.get(tenthPlace) // This was the part where freqMap.get(tenthPlace)++ was giving error
            value++
            freqMap.set(tenthPlace, value)
        } else  {
            freqMap.set(tenthPlace, 1)
        }
        
        // console.log(i);
        // console.log(freqMap);
        
     if (onthPlace !== 0) {
            if(freqMap.has(onthPlace)) {
                value = freqMap.get(onthPlace)
                value++
                freqMap.set(onthPlace, value)
            } else  {
                freqMap.set(onthPlace, 1)
                // console.log(freqMap);
            }
        }
    }
    
    let numbsWithHigestFreq = []
    freqToNumMap = new Map()
    
    freqMap.forEach((value, key) => {
        // console.log(key , ' : ', value)
        if(freqToNumMap.has(value)) {
            const values = freqToNumMap.get(value)
            values.push(key)
            freqToNumMap.set(value, values)
        } else {
            freqToNumMap.set(value, [key])
        }
        
        
    })
    // console.log(freqToNumMap)
    
    let largest
    freqToNumMap.forEach((value, key) => {
        
        // console.log(largest, key)
        if(!largest ||largest<key) {
            numbsWithHigestFreq = []
            numbsWithHigestFreq.push(...value)
            largest = key
        }
    })

    // console.log(numbsWithHigestFreq)
    return numbsWithHigestFreq.sort((a, b) =>(a-b))
    
}


console.log(solution([25, 2, 3, 57, 38, 41, 30]))
console.log(solution([25]))
console.log(solution([25, 2, 3, 57, 38, 41]))
console.log(solution([25,25, 25, 92, 92, 92, 10]))
console.log(solution([1, 1, 1, 1, 1, 1]))


// Time complexity = O(n)
