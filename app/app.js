//Load express module with `require` directive
import express from 'express'
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

var input = document.createElement("input");
input.setAttribute('type', 'text');

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
