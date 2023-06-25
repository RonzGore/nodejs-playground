// import { spider } from './spider.js'
import { spider } from './spider-refactored-1.js'

spider(process.argv[2], (err, filename, downloaded) => {
  console.log(process.argv)
  if (err) {
    console.error(err)
  } else if (downloaded) {
    console.log(`Completed the download of "${filename}"`)
  } else {
    console.log(`"${filename}" was already downloaded`)
  }
})
