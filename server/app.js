var express = require('express');
var path = require('path');

var app = express();

app.get('/:file(*)', function(req, res) {
  console.log('get / called');
  console.log('file req = ', req.params.file);
  var fileName = req.params.file;

  console.log('fileName', fileName);

  var fullPath = path.join(__dirname, fileName);

  console.log('fullPath = ', fullPath);
  res.download(fullPath);
});

app.listen(3000, function() {
  console.log('server is listenting');
});
