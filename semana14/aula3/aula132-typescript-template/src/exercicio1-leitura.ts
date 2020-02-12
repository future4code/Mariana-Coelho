let fs = require('fs')

const primeiraPromessa = new Promise((resolve, reject) => {
    fs.readdit('textos/', (error: Error, data: Buffer) => {
        if(error) {
            reject(error)
        } else {
            resolve(data)
        }
    })
})