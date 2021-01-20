const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// CORS for react app, assuming port 3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// use middleware to serve static images
app.use(express.static('public'))

// read data from options file
const sundaeOptionsRaw = fs.readFileSync('./sundae-options.json', 'utf-8');
const sundaeOptions = JSON.parse(sundaeOptionsRaw);

app.get('/scoops', (req, res) => {
  // return data from file
  res.json(sundaeOptions.iceCreamFlavors)
})

app.get('/toppings', (req, res) => {
  // return data from file
  res.json(sundaeOptions.toppings)
})

app.post('/order', (req, res) => {
  // create a random order number
  const orderNumber = Math.floor(Math.random() * 10000000000);

  res
    // set status to 201 (created)
    .status(201)

    // return "order number" as the response
    .json({ orderNumber })
})

if (require.main === module) {
  app.listen(3030, () => console.log('Sundae server listening on port 3030!'))
}

module.exports = app;