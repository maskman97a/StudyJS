const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

// Get, Post, Put, Delete

// http://localhost:3000/......
// app.use(express.static('HTML CSS'));
// app.use(express.static('../Bai 2'));
// http://localhost:3000/web15/web14/param2

app.get('/:classroom', (req, res) => {
	const classroomName = req.params.classroom;
	//http://localhost:3000/web11?test=abc&test2=bcd
	console.log(reqquery);
	// req.query
	// req.params.param
	axios.get('https://btvn-web15s.herokuapp.com/api/'+classroomName)
	// .then.....
    res.send('<h1>'+classroomName+'</h1>');
});

// http://localhost:3000/style.css
// app.get('/style.css', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../nav/style.css'));
// });

app.listen(3000, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening at port 3000!");
});
