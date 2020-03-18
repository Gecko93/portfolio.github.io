var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
// exports.area = function(width) {
//   return width * width;
// };
// exports.perimeter = function(width) {
//   return 4 * width;
// };
module.exports = {
  area: function(width) {
    return width * width;
  },

  perimeter: function(width) {
    return 4 * width;
  }
};
console.log('First');
console.log('Second');
setTimeout(function() {
  console.log('First');
}, 3000);
console.log('Second');

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
// wiki.js - Wiki route module
var wiki = require('./wiki.js.js.js');
// ...
app.use('/wiki', wiki);

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;
