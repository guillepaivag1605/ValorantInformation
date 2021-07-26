const axios = require('axios')

let config = {
    baseURL: process.env.URL_API_VALORANT,
    timeout: 1000,
}

module.exports = axios.default.create(config)