// console.log("Hello World");
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.listen(4200)

//localhost:4200

// const objData = {
//     name: "Tung",
//     age: 21
// }

// JSON
// console.log("Data: " + JSON.stringify(objData));

// console.log("Start write file");
// fs.writeFile('test.txt', JSON.stringify(objData), (err) => {
//     if(err)console.log(err)
//     else console.log("Write file success!");
// });
// console.log("End write file");

// console.log("Start read file");
// const fileData = fs.readFile('test.txt',(err, data)=>{
//     if(err)console.log(err);
//     else return(data);
// });
// console.log(fileData);
// console.log("End read file");

// console.log("Start read file sync");
// const fileDataSync = fs.readFileSync('test.txt',{ encoding: 'utf-8'});
// const dataObj = JSON.parse(fileDataSync);
// console.log(dataObj.name + 'chua' + dataObj.age + dataObj.sex);
// console.log("End read file sync");

// fs.readFile
// fs.writeFileSync
// fs.readFileSync