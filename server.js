const express = require('express');
const atelier = require('./helpers/atelier');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/dist')));

// Get all products
app.get('/api/*', (req, res) => {
  console.log('HI');
  let endpoint = req.query.endpoint;
  console.log(endpoint);
  atelier.getEndpoint(endpoint, (error, products) => {
    if (error) {
      console.log('Server Error while retrieving all products:', error);
    } else {
      res.send(products);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
