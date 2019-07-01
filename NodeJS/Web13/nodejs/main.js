// console.log('Hello World!')

const express = require('express');

const app = express();

// const fs = require('fs');
const fileModule = require('./module');

fileModule.writeFileCustom('test2.json', {a: "abcxyz", b: "bcdxyz"});
fileModule.readFileCustom('test2.json');

// bất đồng bộ:
// fs.writeFile("tên file", "data", option, callback)

// đồng bộ:
// fs.writeFileSync

let writeData = {
    a: 5,
    b: 15
}

// convert Object to JSON String
let jsonData = JSON.stringify(writeData);

// not sync
// console.log('Start writing File');
// fs.writeFile('test.json', jsonData, (err)=>{
//     if(err)console.log(err)
//     else console.log(writeData);
// });
// console.log("End writing File!");

// sync
// console.log('Start writing File Sync');
// let writeDone = fs.writeFileSync('test.txt', writeData);
// console.log(writeDone);
// console.log('End writing File Sync');

//readFile
// console.log('Start reading File!');
// fs.readFile('test.json',(err,data)=>{
//     if(err)console.log(err)
//     else console.log("Read file success: " + JSON.parse(data).a);
// });
// console.log('End reading File!');

// readFileSync
// console.log('Start reading File Sync!');
// let readDone = fs.readFileSync('test.txt');
// console.log("readFileSync Success, data: " + readDone)
// console.log('End reading File Sync!');


