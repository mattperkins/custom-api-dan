// file database
let words = {
 "lemon": 5,
 "lime": 3,
 "peach": 1
}
const express = require('express')
const app = express()

const PORT = 3000
const server = app.listen(PORT, listening)
console.log(`App is running on PORT:${PORT}`)

function listening() {
 console.log('Callback confirmed')
}

app.use(express.static('static'))

app.get('/user', getUser)
function getUser(req,res){
 res.send('User request received')
}
app.get('/search/:query', search)
function search(req,res){
 let data = req.params
 res.send(`Search for ${data.query} received`)
}
app.get('/loop/:query/:num', loop)
function loop(req,res){
 let data = req.params
 let num = data.num
 let reply = ""
 for (var i=0; i<num; i++){
  reply += `Print loop for ${data.query} \n`
 }
 res.send(reply)
}

// ? makes score optional 
app.get('/add/:word/:score?', addWord)
function addWord(req,res){
 let data2 = req.params
 let word = data2.word
 let score = Number(data2.score)
// words = object at top of file (file database)
 words[word] = score
 let reply = "Your word has been added"
 res.send(reply)
}
app.get('/all', sendAll)
function sendAll(req,res){
 res.send(words)
}