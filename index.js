'use strict';
const fs=require('fs');
const reader =require('./edit-file');
const file = `${__dirname}/files/data/file.txt`;
fs.readFile(file,(err,data)=>{
    if(err){throw err;}
    console.log('callBack',data.toString())
})
// fs.writeFile(file,(err,data)=>{
//     if(err){throw err;}
//     console.log('callBack',data)
// })
fs.writeFile(file, 'dania', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });