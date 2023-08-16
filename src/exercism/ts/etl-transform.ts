function transform(oldMapping: {[key: string]: string[]}) {
  let transformedMapping: {[key: string]: number} = {}
  for (const k of Object.keys(oldMapping).map(Number)) {
    for (const letter of oldMapping[k]) {
      transformedMapping[letter.toLowerCase()] = k
    }
  }
  return transformedMapping
}

console.log(transform({1: ['A']}))
console.log(transform({1: ['A', 'E', 'I', 'O', 'U']}))
console.log(transform({1: ['A', 'E'], 2: ['D', 'G']}))
console.log(
  transform({
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  })
)
