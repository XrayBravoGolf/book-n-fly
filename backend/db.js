const { Pool } = require('pg')

const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb' // TODO use .env
const pool = new Pool({
  connectionString
})
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
const query = (quertText, params) => new Promise((resolve, reject) => {
  pool.query(quertText, params)
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = { query }
