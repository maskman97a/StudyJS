const fs = require('fs');

const writeFileCustom = function(filePath, writeData){
    fs.writeFile(filePath, JSON.stringify(writeData), (err) =>{
        if(err)console.log(err)
        else console.log(writeData);
    });
}

const readFileCustom = function(filePath){
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if(err)console.log(err)
        else console.log(data);
    });
}

module.exports = {
    writeFileCustom,
    readFileCustom
}