
const fs = require('fs');
const util = require('util');

const readerAndWriter = require('./edit-file');
const file = `${__dirname}/files/data/person.json`;
// const file='/mnt/c/Users/std21/Lab-Class-03/files/data/person.json';
//fs function

// fs.readFile(process.argv[2],(err,data)=>{
//     if(err){throw err;}
//     console.log('callBack',data.toString())
// })
// fs.writeFile(process.argv[2], 'dania', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });
// // callback function
// readerAndWriter.readerWithCallback(process.argv[2], (err, data) => {
//     if (err) { throw err; }
//     let obj=JSON.parse(data);
//     console.log('Callback from module', obj.firstName);
//   })

// readerAndWriter.writerWithCallback (process.argv[2],'hi',(err)=>{
// if (err) throw err; console.log('Replaced!')})

// readerAndWriter.readerWithPromise(process.argv[2])
// .then(data=>console.log('data',JSON.parse(data)))
// .catch(err=>{throw err;})


// readerAndWriter.writerWithPromise(process.argv[2],'dania')
// .then((data)=>{
// console.log('done',data )})
// .catch(err=>{throw err;})
readerAndWriter.readFile(file)
  .then(data=>{
    return JSON.parse(data);
  })
  .then(data=>writerWithPromise(file,data))
  .catch(err=>console.error(err));
const writeFile = util.promisify(fs.writeFile);

const writerWithPromise = (file,data)=>{
  console.log('dataBeforModifing',data);
  data.firstName = 'dania';
  data.married = false;
  data.kids = 3;
  let dataAfterModifing = JSON.stringify(data);
  writeFile(file,dataAfterModifing);
  let data3 = JSON.parse(dataAfterModifing);
  console.log('dataAfterModifing',data3);
};


//  on terminal type (node index.js /mnt/c/Users/std21/Lab-Class-03/files/data/person.json)