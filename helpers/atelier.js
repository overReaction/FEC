const axios = require('axios');
const config = require('../APIconfig');
const API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const getEndpoint = (endpoint, callback) => {
  axios.get(`${API_URL}/${endpoint}`, {
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

const postToEndpoint = (endpoint, body, callback) => {
  console.log('body in helper: ', body);
  axios.post(`${API_URL}/${endpoint}`, body, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response);
    })
    .catch(error => {
      console.log('Error posting to Atelier', error);
    });
};

const putToEndpoint = (endpoint, data, callback) => {
  console.log('data in helper: ', data);
  axios.put(`${API_URL}/${endpoint}`, data, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response);
    })
    .catch(error => {
      console.log('Error posting to Atelier', error);
    });
};

module.exports = {
  getEndpoint: getEndpoint,
  postToEndpoint: postToEndpoint,
  putToEndpoint: putToEndpoint
};
