const app = require('./app')

const dotenv = require('dotenv')
const connectDatabse = require('./config/database')

// config
dotenv.config({path: 'backend/config/config.env'})

connectDatabse()

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://lockalhost:${process.env.PORT}`)
})
