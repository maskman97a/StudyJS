const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const questionList = require('./questions.json')
const bodyParser = require('body-parser');

let app = express();

app.engine("handlebars", hbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    let questionRandom = questionList[Math.floor(Math.random() * questionList.length)];
    res.render("home", {
        question: questionRandom
    });
});

app.post('/question/add', (req, res) => {
    let newQuestion = {
        content: req.body.questionContent,
        yes: 0,
        no: 0,
        id: questionList.length
    }
    questionList.push(newQuestion);
    fs.writeFileSync('./questions.json', JSON.stringify(questionList));
    res.redirect('/question/' + newQuestion.id);
});

// param:  http://localhost:2311/question/questionId  
app.get('/question/:questionId', (req, res) => {
    // req.params.questionId
    let question = questionList[req.params.questionId];
    res.render('question', {
        question,
        totalVote: question.yes + question.no
    });
});

// query: http://localhost:2311/question?questionId=1&abcxyz=true
// app.get('/question',(req,res)=>{
//     let question = questionList[req.query.questionId];
//     res.render('question',{
//         question,
//         totalVote : question.yes + question.no
//     });
// });

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.get("/answer/:questionId/:vote", (req, res) => {
    questionList[req.params.questionId][req.params.vote] += 1;
    fs.writeFileSync('./questions.json', JSON.stringify(questionList));
    res.redirect("/question/" + req.params.questionId);
});

app.listen(2705, (err) => {
    if (err) console.log(err)
    else console.log('Server is listening at port 2705!');
});