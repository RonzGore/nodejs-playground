function valid(digitString: string): boolean {
  // Reverse the string
  const stringFromRight = digitString.split('').reverse()
  console.log(stringFromRight)

  let sum: number = 0
  // loop over and pick even position number
  let count = 1
  for (const stringDigit of stringFromRight) {
    let digit = parseInt(stringDigit)
    if (count % 2 === 0) {
      digit = digit * 2
      if (digit > 9) {
        digit = digit - 9
      }
    }
    console.log(stringDigit, digit)
    sum += digit
    count++
  }
  console.log(sum)
  return sum % 10 === 0
}

console.log(valid('760913186'))
console.log(valid('760912386'))
console.log(valid('762692259')) // 7+4+9+3
