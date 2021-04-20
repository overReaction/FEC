const axios = require('axios');
const config = require('../APIconfig');
const API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const getEndpoint = (endpoint, callback, id) => {
  console.log('endpoint:', endpoint);
  console.log('URL:', `${API_URL}/${endpoint}?product_id=${id}`);
  axios.get(`${API_URL}/${endpoint}&product_id=${id}`, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      console.log('Err getting product from Atelier:', error.status);
    });
};

module.exports = {
  getEndpoint
};

// http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions?product_id=18078