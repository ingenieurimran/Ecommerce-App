const mongoose = require('mongoose')

const connectDatabse = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Mongodb connect with server: ${data.connection.host}`)
  })
}

module.exports = connectDatabse

// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }
