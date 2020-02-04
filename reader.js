  
'use strict';
const fs = require('fs');
const util = require('util');


const readerWithCallback = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) { callback(err); }
    else { callback(undefined, data.toString().trim()); }
  });
};
const readFilePromise = util.promisify(fs.readFile);
const readerWithPromise = (file) => {
  return readFilePromise(file)
    .then(contents => contents.toString().trim())
    .catch(error => error);
};
// const writeFilePromise =util.promisify(fs.writeFile);

const writeerWithPromise = (file,data) =>{  data.firstName = 'dania';
  let dataModified = JSON.stringify(data);
  writeFilePromise(file,dataModified);
  return dataModified;
};

module.exports = { readerWithCallback , readerWithPromise ,writeerWithPromise };