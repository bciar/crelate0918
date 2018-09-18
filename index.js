const axios = require('axios');

axios.create({
    baseURL: 'https://app.crelate.com',
    responseType: 'application/json'
})
.get('/api/pub/v1/jobs/recent?modified=100000&api_key=7270372c351a473696670de50d1667e0')
.then(response => {
    console.log('response======>', response.data.Results);
})
.catch(error => {
    console.log('error======>', error);
});