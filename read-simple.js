'use strict';
const fs = require('fs');
const filename = process.argv[2]
if (!filename) {
    throw Error("You should provide a filename !")
}

fs.readFile(filename, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});