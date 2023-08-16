function findClosestTemp(inputs: string[]) {
  let closestToZero: number = 0

  if (inputs && inputs.length > 0) {
    closestToZero = parseInt(inputs[0])
    let closestAbsoluteTemp = Math.abs(parseInt(inputs[0]))
    for (let i = 0; i < inputs.length; i++) {
      let newTempDiff = Math.abs(parseInt(inputs[i]))
      if (newTempDiff < closestAbsoluteTemp || parseInt(inputs[i]) === closestAbsoluteTemp) {
        closestToZero = parseInt(inputs[i])
        closestAbsoluteTemp = newTempDiff
      }
    }
  }
  return closestToZero
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(findClosestTemp([]))
console.log(findClosestTemp(['15', '7', '-9', '14', '12', '-3']))
console.log(findClosestTemp(['-273']))
console.log(findClosestTemp(['-15', '-7', '-9', '-14', '-12']))
console.log(findClosestTemp(['-10', '-10']))
console.log(findClosestTemp(['-15', '-7', '-9', '-14', '-12', '7']))
