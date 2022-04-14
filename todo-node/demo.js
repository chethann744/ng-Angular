const fstat  = require("fs")
// const path = require("path")
const mypath= require('path')
const notes = "C:\Users\chethan_nagaraju\text.js"

console.log(mypath.dirname(notes))
console.log(mypath.basename(notes))
console.log(mypath.extname(notes))


fstat.readFile("./.env", 'utf8', (err, data) => {
    if (err) {
        console.error(`i am in error stats ${err}`)
        return
    }
    console.warn(data);
})
 const content = 'chethan_nagaraju'
fstat.writeFile('./text.txt', content, { flag: 'a+' }, err => {
    if (err) {
        console.error(err)
        return

    }
    console.log('added content inside file successfully')
})