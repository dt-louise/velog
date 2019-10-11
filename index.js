const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const router = express.Router()

app.set('view engine', 'pug')
app.set('views', './views')

router.route('/').get((req, res) => {
  res.render('index')
})

app.use('/', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(router)

app.listen(80, () => {
  console.log('server on')
})
