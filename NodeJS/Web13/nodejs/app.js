const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
    // res.send("hello World");
});

app.listen(6100, (err)=>{
    if(err) console.log(err)
    else console.log("server is listening at port 6100");
});