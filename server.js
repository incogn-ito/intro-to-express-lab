// import modules

import express from 'express'

import { collectibles } from './data.js'

import { shoes } from './shoes.js'

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

/* Ex 4

const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  Query Parameters:
min-price: Excludes shoes below this price.
max-price: Excludes shoes above this price.
type: Shows only shoes of the specified type.
No parameters: Responds with the full list of shoes.
*/

app.get('/shoes', (req, res) => { 
  // Accessing query parameters from the request
  if (req.query['min-price'] && req.query['max-price'] && req.query.type) {
    let minPrice = req.query['min-price']
    let maxPrice = req.query['max-price']
    let shoeType = req.query.type
    let filteredShoes = shoes.filter((shoe) => {
      return (shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type === shoe.type)
      })
      res.send(filteredShoes)
    } else {
      res.send(shoes)
    }
  })

  
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})