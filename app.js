let req_datetime

// -----------------------------------------------------------------------------

const express = require('express')

// -----------------------------------------------------------------------------

const app = express()
const port = 3000

// -----------------------------------------------------------------------------

function get_datetime_string(full_datetime) {
  const utc_datetime = new Date(full_datetime.toUTCString())

  const year = utc_datetime.getFullYear()
  const month = utc_datetime.getMonth()
  const day = utc_datetime.getDate()
  const hour = utc_datetime.getHours()
  const minute = utc_datetime.getMinutes()
  const second = utc_datetime.getSeconds()

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

function get_datatime() {
  // console.log('----------------------------', (new Date()).getTime())
  return new Date()
}

function get_total_ms(req_datetime, res_datetime) {
  const total_ms = res_datetime.getTime() - req_datetime.getTime()
  // console.log(req_datetime.getTime(), res_datetime.getTime(), total_ms)

  return total_ms
}

function server_log(method, url) {
  // this part is for slow the request-response-cycle
  console.log('slow down resquest-response-cycle...')
  console.log('slow down resquest-response-cycle...')
  console.log('slow down resquest-response-cycle...')

  const res_datetime = get_datatime()
  const total_ms = get_total_ms(req_datetime, res_datetime)
  const daytime_ = get_datetime_string(req_datetime)

  console.log(`${daytime_} | ${method} from ${url} | total time: ${total_ms}ms`)
}

// -----------------------------------------------------------------------------

app.use(function (req, res, next) {
  req_datetime = get_datatime()
  // const day = get_datetime_string(req_datetime)
  // console.log(`${day} | ${req.method} from ${req.originalUrl}`)
  next()
})

// -----------------------------------------------------------------------------

app.get('/', function (req, res, next) {
  server_log(req.method, req.originalUrl)
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  server_log(req.method, req.originalUrl)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  server_log(req.method, req.originalUrl)
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  server_log(req.method, req.originalUrl)
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})


// -----------------------------------------------------------------------------

app.use(function (req, res, next) {
  const day = get_now_datetime()
  console.log(`after ${day} | ${req.method} from ${req.originalUrl}`)
  next()
})