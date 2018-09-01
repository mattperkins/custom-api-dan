const fs = require('fs')
let data = fs.readFileSync('users.json')
let users = JSON.parse(data)
console.log(users)
// instantiate the app
const express = require('express')
const app = express()

const PORT = 3000
const server = app.listen(PORT, listening)
console.log(`App is running on PORT:${PORT}`)

function listening () {
  console.log('Callback confirmed')
}

// add static html to route
app.use(express.static('static'))


// ADD USER
// age is optional
app.get('/add/:user/:age?', adduser)
function adduser (req, res) {
  let data2 = req.params
  let user = data2.user
  let age = Number(data2.age)
  let reply
  if (!age) {
    reply = {
      msg: 'age is a required path/parameter'
    }
  } else {
    // users = object at top of file (file database)
    users[user] = age
    let data = JSON.stringify(users, null, 2)
    fs.writeFile('users.json', data, fin)
    function fin (err) {
      console.log('User added to file database')
    }
    reply = {
      status: 'success',
      user,
      age
    }
  }
  res.send(reply)
}

// SHOW ALL ENTRIES IN DB
// show all file database entries
app.get('/all', sendAll)
function sendAll (req, res) {
  res.send(users)
}

// SEARCH DB
// search for user in file database
app.get('/search/:fileDb', fileDB)
function fileDB (req, res) {
  let fileDb = req.params.fileDb
  let reply
  if (users[fileDb]) {
    reply = {
      status: 'Found',
      fileDb,
      age: users[fileDb]
    }
  } else {
    reply = {
      status: 'not found',
      fileDb
    }
  } res.send(reply)
}
