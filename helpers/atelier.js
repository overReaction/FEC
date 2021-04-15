const axios = require('axios');
const config = require('../config');
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const getAllProducts = (callback) => {
  axios.get(`${API_URL}/products`, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      console.log('Err getting all products from Atelier', error);
    });
};

module.exports = {
  getAllProducts
};
