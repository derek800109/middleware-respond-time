// app.js
const express = require('express')

// -----------------------------------------------------------------------------

const app = express()
const port = 3000

// -----------------------------------------------------------------------------

function get_now_datetime() {
  const full_date = new Date(new Date().toUTCString())
  const year = full_date.getFullYear()
  const month = full_date.getMonth()
  const day = full_date.getDate()
  const hour = full_date.getHours()
  const minute = full_date.getMinutes()
  const second = full_date.getSeconds()

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

app.use(function (req, res, next) {
  const day = get_now_datetime()
  console.log(`${day} | ${req.method} from ${req.originalUrl}`)
  next()
})

// -----------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})