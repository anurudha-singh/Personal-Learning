var fs = require('fs');

fs.open('../files/index.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});