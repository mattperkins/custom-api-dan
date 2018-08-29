// file database
let words = {
 "lemon": 5,
 "lime": 3,
 "peach": 1
}

// instantiate the app
const express = require('express')
const app = express()

const PORT = 3000
const server = app.listen(PORT, listening)
console.log(`App is running on PORT:${PORT}`)

function listening() {
 console.log('Callback confirmed')
}
// add static html to route
app.use(express.static('static'))

// create a user route
app.get('/user', getUser)
function getUser(req,res){
 res.send('User request received')
}
// search route params example
app.get('/search/:query', search)
function search(req,res){
 let data = req.params
 res.send(`Search for ${data.query} received`)
}
// adding a second route path param
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