var express = require('express')
var app = express()
var apiRoutes = require('./app/routes/apiRoutes')
var htmlRoutes = require('./app/routes/htmlRoutes')
var path = require('path')




// api route
app.use('/', apiRoutes)


// html routes
app.use('/', htmlRoutes)


app.listen(3000, function(){
  console.log('app is running');
})
