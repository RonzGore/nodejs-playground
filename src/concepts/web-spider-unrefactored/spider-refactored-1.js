import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename } from './utils.js'


function saveFile(filename, content, cb) {
    mkdirp(path.dirname(filename), err => { // [3]
        if (err) {
          return cb(err)
        } 
        fs.writeFile(filename, content, cb)
    })
}

function donwloadFile(url, filename, cb) {
    superagent.get(url).end((err, res) => { 
        if (err) {
            return cb(err) 
        } 
        saveFile(filename, res.text, err => { 
            if(err) {
                return cb(err) 
            } 
            console.log(`Downloaded and saved: ${url}`)
        })
    })
}


export function spider (url, cb) {    
    const filename = urlToFilename(url)
    fs.access(filename, err => {
        if (err && err.code === 'ENOENT') {
            console.log(`Downloading ${url} into ${filename}`)
            donwloadFile(url, filename, cb)
        }else {
            cb(null, filename, false)
        }
    })
}
