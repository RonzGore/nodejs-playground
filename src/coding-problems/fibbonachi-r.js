const fib = (n) => {
    let sum = 0
    if(n === 0 || n === 1) {
        return 1
    }

    sum += fib(n-2)+fib(n-1)
    return sum
}

const printFib = (n) => {
    arr = []
    for(let i = 0; i <= n; i++) {
        arr.push(fib(i))
    }
    console.log(arr.join(', '));
}

printFib(5)