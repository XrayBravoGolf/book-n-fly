const { Pool } = require('pg')
require('dotenv').config()

const connectionString = process.env.DATABASE_URL
const pool = new Pool({
  connectionString
})
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
const queryDB = (quertText, params) => new Promise((resolve, reject) => {
  pool.query(quertText, params)
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = { queryDB }
