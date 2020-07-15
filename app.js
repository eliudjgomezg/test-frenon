const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
jwt = require('jsonwebtoken')
app.use(bodyParser.json())
require('dotenv').config();
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
 

app.use(express.static(path.join(__dirname, 'build')));
app.use('*', function (req, res, next) {
  if ((req.originalUrl && req.originalUrl.indexOf('/api/') === -1)) {
    let _path = path.join(__dirname, 'build', 'index.html');
    res.sendFile(_path);
  } else {
    next()
  }
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-token, public-request');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next()
});

const routes = require('./api/routes/');
routes.run(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server started');
})
