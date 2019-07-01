const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const fs = require('fs');

// GET/POST/PUT/DELETE
// http://localhost:4300/
// app."method"('url',(req,res)=>{

// })

// app.use(express.static('HTML & CSS'));
// http://localhost:4300/web16/Yooo/param2

app.get('/:classroom/:param', (req, res)=>{
    const classroomName = req.params.classroom;
    // http://localhost:4300/web15?test=abc&test2=bcd
    console.log(req.query);
    // req.query
    // req.params.param
    axios.get('https://btvn-web16s.herokuapp.com/api/'+ classroomName)
    // .then....
    // res.send('<h1>' + classroomName + '</h1>');
});
// app.get('/web15', (req, res)=>{
//     res.send('<h1>Hello</h1>');
// });
// app.get('/web14', (req, res)=>{
//     res.send('<h1>Hello</h1>');
// });
// app.get('/web13', (req, res)=>{
//     res.send('<h1>Hello</h1>');
// });
// app.get('/web12', (req, res)=>{
//     res.send('<h1>Hello</h1>');
// });
// app.get('/web11', (req, res)=>{
//     res.send('<h1>Hello</h1>');
// });

    // axios({
    //     url:'https://btvn-web16s.herokuapp.com/',
    //     method: 'GET'
    // }).then(function (data) {
    // // handle success
    // console.log(data);

    // // fs.writeFileSync()


//   const data = fs.readFileSync();
//   res.send({data});

// app.get('/',(req,res) => {
//     console.log(__dirname);
//     // res.send({ success: 1, data:"Hello World!"})
//     res.sendFile(path.resolve(__dirname, '../HTML & CSS/test.html'))
//     // res.sendFile(path.resolve(__dirname, '../HTML & CSS/nav/nav/Nav.html'));
//     // res.sendFile('E:/Study/Document/Web/HTML & CSS/nav/nav/Nav.html')
//     // res.sendFile(__dirname + '/HTML & CSS/test.html');
// });

// cục súc
// app.get('/style.css',(req,res) => {
//     res.sendFile(path.resolve(__dirname, '../HTML & CSS/nav/nav/style.css'));
// });

app.listen(4300, (err) => {
    if(err)console.log(err)
    else console.log("Server is listening at port 4300");
});
