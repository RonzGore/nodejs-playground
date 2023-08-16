const util = require('util')
const sleep = util.promisify(setTimeout)

async function doSomeWork() {
  console.log(1)

  const promise = asynchronousWork()

  console.log(4)

  await promise

  console.log(5)
}

// async function asynchronousWork() {
//   console.log(2);
//   await sleep(1);
//   console.log(3);
//   return;
// }

function asynchronousWork() {
  return new Promise((resolve) => {
    console.log(2)
    setTimeout(() => {
      console.log(3)
      resolve()
    }, 1)
  })
}

doSomeWork()

const props = {prop1: 'North America', prop2: 'Europe', prop3: 'Australia'}
const {prop1, prop2, prop3 = 'Europe'} = props

console.log(prop1, prop2, prop3)

const ownerState = {
  prop1,
  prop2,
  prop3
}

const {continent1, ...rest} = {
  continent1: 'Asia',
  coninent2: 'North America',
  continent3: 'Europe',
  continent4: 'South America'
}

console.log(ownerState)

console.log({
  ownerState,
  ...rest
})
