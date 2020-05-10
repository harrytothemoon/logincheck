const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./checkUser')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  let email = req.body.email
  let password = req.body.password
  let results = checkUser(email, password)
  let loginStatus = results.loginStatus
  let userName = results.userName
  if (loginStatus === 'Success') {
    res.render('successPage', { userName })
  } else {
    const error = 'Sorry, the username or password is incorrect!'
    res.render('index', { error })
  }
})

app.listen(port, () => {
  console.log(`The Express server is listen on http://localhost:${port}`)
})

