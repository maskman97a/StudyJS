const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017", (err) =>{
    if(err)console.log(err)
    else console.log("DB connect success!");
})

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/public/ask.html')
});

app.get('/answer',(req,res) =>{
    res.sendFile(__dirname+'/public/answer.html')
});

app.get('/ask',(req,res) =>{
    res.sendFile(__dirname+'/public/ask.html')
});

app.post('/createquestion', (req, res) => {
    // req.body
    // console.log(req.body);
    let questionList = JSON.parse(fs.readFileSync('./questions.json'));

    const newQuestion = {
        id: questionList.length,
        questionContent: req.body.questionContent,
        yes:0,
        no:0,
    }

    questionList.push(newQuestion);

    fs.writeFileSync('./questions.json', JSON.stringify(questionList));
});

app.get('/randomquestion',(req,res)=>{
    let questionList = JSON.parse(fs.readFileSync('./questions.json'));

    if(questionList.length > 1){
        let randomIndex = Math.floor(Math.ramdom()*questionList.length);
        let questionRandom = questionList[randomIndex];
        res.send({question: questionRandom});
    }
});

app.listen(4400, (err) =>{
    if(err)console.log(err);
    else console.log("Server is listening at port 4400!");
});