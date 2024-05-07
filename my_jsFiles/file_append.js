var fs = require('fs');

fs.appendFile('../files/index.html', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});