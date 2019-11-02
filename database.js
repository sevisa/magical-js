const fs = require ('fs')

const save = function(filename, data) {
  fs.writeFileSync(filename , JSON.stringify(data))
  // console.log(data)
}

const load = function(filename) {
  return JSON.parse(fs.readFileSync(filename,'utf-8'))

  // console.log(data)
}

module.exports = { save, load }