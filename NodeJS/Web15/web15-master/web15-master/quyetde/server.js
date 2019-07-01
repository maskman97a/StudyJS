const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

const QuestionModel = require('./models/questionModel');

mongoose.connect("mongodb://localhost/quyetde", (err) => {
	if(err) console.log(err)
	else console.log("DB connect success!");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/answer.html');
});

app.get('/ask', (req, res) => {
	res.sendFile(__dirname + '/public/ask.html');
});

app.get('/answer', (req, res) => {
	res.sendFile(__dirname + '/public/answer.html');
});

app.post('/createquestion', (req, res) => {
	// const newQuestion = new QuestionModel({
	// 	questionContent: req.body.questionContent
	// });

	// newQuestion.save();

	// res.redirect('/answer');

	QuestionModel.create(
		{ questionContent: req.body.questionContent },
		(err, questionCreated) => {
			if(err) console.log(err)
			else res.redirect('/question/'+questionCreated._id);
		});
});

app.get('/randomquestion', (req, res) => {
	QuestionModel.count({}, (err, count) => {
		let randomNum = Math.floor(Math.random()*count);

		QuestionModel.findOne({}, null, { skip: randomNum }, (err, questionFound) => {
			if(err) console.log(err)
			else res.send(questionFound);
		});
	})
});

app.post('/answer', (req, res) => {
	const { questionid, answer } = req.body;

	// QuestionModel.findByIdAndUpdate(
	// 	questionid,
	// 	// { $inc: answer == "yes" ? { "yes": 1 } : { "no": 1 } },
	// 	{ $inc: { [answer]: 1 } },
	// 	(err, questionUpdated) => {
	// 		if(err) console.log(err)
	// 		else res.send({ success: 1 });
	// 	}
	// );

	QuestionModel.findById(questionid, (err, questionFound) => {
		if(err) console.log(err)
		else if(!questionFound) console.log("Not found!")
		else {
			//edit here
			questionFound[answer] += 1;
			questionFound.save((err, questionUpdated) => {
				if(err) console.log(err)
				else res.send({ success: 1 });
			});
		}
	});
});

app.get('/question/:questionId', (req, res) => {
	res.sendFile(__dirname + "/public/detail.html");
});

app.get('/questiondetail/:questionId', (req, res) => {
	let questionId = req.params.questionId;

	QuestionModel.findById(questionId, (err, questionFound) => {
		if(err) console.log(err)
		else if(!questionFound) console.log("Not found!")
		else res.send({ success: 1, question: questionFound });
	});
});

app.use(express.static('public'));

app.listen(3001, (err) => {
	if(err) console.log(err)
	else console.log('Server is listening at port 3000');
});