// import modules

import express from 'express'

// create Express app

const app = express()

// configure the app (app.set)



// mount Middleware (app.use)



// mount routes
app.get('/', function(req, res) {
    res.send('<h1>hello friend</h1>')
})

app.get('/greetings/:name', function(req, res) {
    res.send(`Lovely to see you, ${req.params.name}!`)
})

app.get('/roll/:num', function(req, res) {
    console.log(req.params.num)
    let getRandomInt 
    getRandomInt = function(num) {
        return Math.floor(Math.random() * num);
      }
    if (req.params.num === ``){
        res.send(`You have not picked a number`)
    } else {
        res.send(`You have rolled a ${getRandomInt}`)
    }})




// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})