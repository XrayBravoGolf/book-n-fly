const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, './frontend/book-n-fly/dist/lab5front')))
app.use('/api/users', require('./routes/users'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
