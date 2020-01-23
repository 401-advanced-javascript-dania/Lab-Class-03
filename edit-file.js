'use strict';
const fs=require('fs');
const readerWithCallback =(file,callback)=>{
    fs.readFile(file,(err,data)=>{
        if(err){callback(err)}
        else{callback(undefined,data.toString().trim());}
    });
};
const writerWithCallback =(file,word,callback)=>{
    fs.writeFile(file,word,(err,data)=>{
        if(err){callback(err)}

        else{
            console.log(data)
            callback(data)}
    });
};

module.exports={readerWithCallback,writerWithCallback};
