// import modules

import express from 'express'
import { collectibles } from './data.js'

// create Express app

const app = express()

// configure the app (app.set)



// mount Middleware (app.use)



// mount routes
app.get('/', function(req, res) {
    res.send('<h1>hello friend</h1>')
})

//Ex 1
app.get('/greet/:name', function(req, res) {
    res.send(`Lovely to see you, ${req.params.name}!`)
})

//Ex 2
app.get('/roll/:num', function(req, res) {
    console.log(req.params.num)
    let getRandomInt = function(num) {
        return Math.floor(Math.random() * num)
      }
    let num = parseInt(req.params.num)
    if (isNaN(num)) {
        res.send(`You must specify a number.`)
    } else {
        res.send(`You have rolled a ${getRandomInt(num)}`)
    }})
    
/* Ex 3

3. I Want THAT One!

Task: Create a route for URLs like /collectibles/<index-parameter>.

Examples: Matches routes such as /collectibles/2 or /collectibles/0.

Data Array:

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
*/ 

app.get('/collectibles/:item', (req, res) => {
  try {
    res.send(`So you want the ${collectibles[req.params.item].name}? For $${collectibles[req.params.item].price}, it can be yours!`)    
  } catch (error) {
    res.send(`This item is not yet in stock. Check back soon!`)
  }
})

//Ex 4


// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})