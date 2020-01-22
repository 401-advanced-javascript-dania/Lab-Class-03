'use strict';
const fs=require('fs');
const readerWithCallback =(file,callback)=>{
    fs.readFile(file,(err,data)=>{
        if(err){callback(err)}
        else{callback(undefined,data.toString().trim());}
    });
};
const writerWithCallback =(file,word,callback)=>{
    fs.writeFile(file,word,(err)=>{
        if(err){callback(err)}
        else{callback(undefined)}
    });
};
module.exports={readerWithCallback,writerWithCallback};
