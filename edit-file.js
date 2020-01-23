'use strict';
const fs=require('fs');
const util =require('util');
// const readerWithCallback =(file,callback)=>{
//     fs.readFile(file,(err,data)=>{
//         if(err){callback(err)}
//         else{callback(undefined,data.toString().trim());}
//     });
// };
// const writerWithCallback =(file,word,callback)=>{
//     fs.writeFile(file,word,(err,data)=>{
//         if(err){callback(err)}

//         else{
//             console.log(data)
//             callback(data)}
//     });
// };
const readFile =util.promisify(fs.readFile);
const readerWithPromise=(file)=>{
    return readFile(file)
     .then((data)=>{
         return data.toString().trim()
     })
     .catch(err=>console.error(err))
}
const writeFile =util.promisify(fs.writeFile);
const writerWithPromise=(file,data)=>{
     writeFile(file,data)
     .then((person)=>{
         console.log('dd',person)
         let dataBeforModifing=person.toString().trim()
         return dataBeforModifing.name=data
     })
     .catch(err=>console.error(err))
}
// module.exports={readerWithCallback,writerWithCallback}
module.exports={readerWithPromise,writerWithPromise};
