const app = require('./app')

const dotenv = require('dotenv')
const connectDatabse = require('./config/database')

// Uncaught Exception Handling

process.on('uncaughtException', err=>{
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server due to Uncaught Exception`)
  process.exit(1)
})

// config
dotenv.config({path: 'backend/config/config.env'})

connectDatabse()

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://loccalhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on('unhandledRejection', err=>{
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server due to Unhandled Promise Rejection`)

  server.close(()=>{
    process.exit(1)
  })
})