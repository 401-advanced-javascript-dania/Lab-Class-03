'use strict';
const fs=require('fs');
const readerAndWriter =require('./edit-file');
const file = `${__dirname}/files/data/file.txt`;
fs.readFile(process.argv[2],(err,data)=>{
    if(err){throw err;}
    console.log('callBack',data.toString())
})
fs.writeFile(process.argv[2], 'dania', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
readerAndWriter.readerWithCallback(process.argv[2], (err, data) => {
    if (err) { throw err; }
    console.log('Callback from module', data.toString());
  });
   readerAndWriter.writerWithCallback (process.argv[2],'hi',(err)=>{
    if (err) throw err;
    console.log('Replaced!')
  
});


// /mnt/c/Users/std21/Lab-Class-03/files/data/file.txt