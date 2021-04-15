const axios = require('axios');
const config = require('../config');


const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';


const getAllProducts = (callback) => {
  let options = {
    headers: {
      Authorization: `${config.API_KEY}`
    }
  };
  axios.get(`${API_URL}/products`, options.headers)
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      console.log('Err getting all products from Atelier', error);
    });
};

module.exports = {
  getAllProducts
};
