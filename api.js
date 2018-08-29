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

function listening() {
 console.log('Callback confirmed')
}

// ADD USER
// score is optional 
app.get('/add/:word/:score?', addWord)
function addWord(req,res){
 let data2 = req.params
 let word = data2.word
 let score = Number(data2.score)
 let reply
 if(!score){
  reply = "Score is a required path/parameter"
 } else {
// words = object at top of file (file database)
 users[word] = score
 let data = JSON.stringify(users)
 fs.writeFile('users.json', data, fin)
 function fin(err){
  console.log('User added to file database')
 }
 reply = "Your user has been added"
}
 res.send(reply)
}


// SHOW ALL ENTRIES IN DB
// show all file database entries
app.get('/all', sendAll)
function sendAll(req,res){
 res.send(users)
}


// SEARCH DB
// search for word in file database
app.get('/search2/:fileDb', fileDB)
function fileDB(req,res){
 let fileDb = req.params.fileDb
 let reply
 if(users[fileDb]){
  reply = {
  status: "Found",
  fileDb,
  score: users[fileDb]
 }
 } else {
  reply = {
   status: "not found",
   fileDb
  }
 } res.send(reply)
}
