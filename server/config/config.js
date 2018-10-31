let env = process.env.NODE_ENV || 'development'
console.log('env: ', env)

if (env === 'development') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://antti:salasana1@ds145053.mlab.com:45053/todo-app'
} else if (env === 'test') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://antti:salasana1@ds147033.mlab.com:47033/todo-app-test'
}