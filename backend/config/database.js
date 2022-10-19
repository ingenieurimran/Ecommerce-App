const mongoose = require('mongoose')

const connectDatabse = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`MOngodb connect with server: ${data.connection.host}`)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = connectDatabse
