if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}

// Requires
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

// App express y configuraciones
const app = express()

var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// Configuraciones
app.use(morgan('dev'))
app.set('port', process.env.PORT || 1605)
app.set('public', path.join(__dirname, 'src', 'public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Rutas
const routesAgentes = require('./src/routes/agentes')

// Rutas 
app.use('/valorant-api', routesAgentes)

// Servidor
app.listen(app.get('port'), () => {
    console.log('http://localhost:' + app.get('port'))
})