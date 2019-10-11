const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const router = express.Router()

router.route('/').get((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html;charset=utf8'})
  res.end('<h1>유승민 ㅄ</h1>')
})

app.use('/', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(router)

app.listen(80, () => {
  console.log('server on')
})
