const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}));

app.use(express.static('client/public'))

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: './client/views'})
})

var topTenController = require('./controllers/topTenController');

app.route('/api/topTen/topTen')
  .get(topTenController.getCurrentScores);


app.listen(1337, () => console.log('This is working!' ));
