const path = require('path')
const fs = require('fs')

const dirpath = path.join(__dirname, '/var/www/html')

fs.readdir(dirpath, function(err, files) {
  const jpgFiles = files.filter(el => path.extname(el) === '.jpg')
  // do something with your files, by the way they are just filenames...
})

console.log("hello my friend")
