'use strict';
const fs=require('fs');
const readerAndWriter =require('./edit-file');
// const file = `${__dirname}/files/data/file.txt`;
const file='/mnt/c/Users/std21/Lab-Class-03/files/data/person.json';
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

readerAndWriter.readerWithPromise(process.argv[2])
.then(data=>console.log('data',JSON.parse(data)))
.catch(err=>{throw err;})


readerAndWriter.writerWithPromise(process.argv[2],'dania')
.then((data)=>{
console.log('done',data )})
.catch(err=>{throw err;})

// /mnt/c/Users/std21/Lab-Class-03/files/data/file.txt