'use strict';
const fs=require('fs');
const util=require('util');
const readerWithCallback =(file,callback)=>{
    fs.readFile(file,(err,data)=>{
        if(err){callback(err)}
        else{callback(undefined,data.toString().trim());}
    });
};
const writerWithCallback =(file,callback)=>{
    fs.writeFile(file,word,(err,data)=>{
        if(err){callback(err)}
        else{callback(undefined,data.toString().trim());}
    });
};
module.exports={readerWithCallback,writerWithCallback};