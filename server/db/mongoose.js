const mongoose = require('mongoose')

const url = 'mongodb://antti:salasana1@ds145053.mlab.com:45053/todo-app'

mongoose.Promise = global.Promise
mongoose.connect(url, { useNewUrlParser: true })

module.exports = {
  mongoose
}