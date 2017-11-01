var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectId} = require('mongodb')
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then( (doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then( (todos) => {
		res.send({
			todos,
		})
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		res.status(404).send();
	} else{
		Todo.findById(id).then( (todo) => {
			if(!todo){
				res.staus(404);
			}
			else{
				res.send(todo);
			}
		}).catch((e) => {
			res.status(400).send(e);
		});
	}

});
app.listen(3333, () => {
	console.log('started on port 3333');
});


