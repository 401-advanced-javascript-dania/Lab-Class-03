'use strict';
const fs=require('fs');
const readerAndWriter =require('./edit-file');
const file = `${__dirname}/files/data/file.txt`;
// fs.readFile(file,(err,data)=>{
//     if(err){throw err;}
//     console.log('callBack',data.toString())
// })

// fs.writeFile(file, 'dania', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });
readerAndWriter.readerWithCallback(file, (err, data) => {
    if (err) { throw err; }
    console.log('Callback from module', data);
  });
   readerAndWriter.writerWithCallback (file,'hello',(err)=>{
    if (err) throw err;
    console.log('Replaced!')
  
});