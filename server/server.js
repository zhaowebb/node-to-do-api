var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectId} = require('mongodb')
var app = express();
var {authenticate} = require('./midleware/authenticate');

const port = process.env.PORT || 3333;

app.use(bodyParser.json());

app.post('/todos', authenticate, (req, res) => {
	var todo = new Todo({
		text: req.body.text,
		_creator: req.user._id
	});

	todo.save().then( (doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todos', authenticate, (req, res) => {
	Todo.find({
		_creator: req.user._id
	}).then( (todos) => {
		res.send({
			todos,
		})
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todos/:id', authenticate, (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		res.status(404).send();
	} else{
		Todo.findOne({
			_id:id,
			_creator:req.user._id
		}).then( (todo) => {
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

app.delete('/todos/:id', authenticate, (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		res.status.send();
	}
	else{
		Todo.findOneAndRemove({
			_id:id,
			_creator:req.user.id
		}).then( (todo) => {
			if(!todo){
				res.status(404);
			}
			else{
				res.send(todo);
			}
		}).catch((e) => {
			res.status(400).send(e);
		});
	}
});

app.patch('/todos/:id', authenticate, (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);
	if(!ObjectId.isValid(id)){
		res.status.send();
	} else{
		if(_.isBoolean(body.completed) && body.completed){
			body.completedAt = new Date().getTime();
		}else{
			body.completed = false;
			body.completedAt = null;
		}

		Todo.findOneAndUpdate({
			_id:id,
			_creator:req.user.id
		}, {
			$set: body
		}, {
			new: true
		}).then((todo) => {
			res.send({todo});
		}).catch((e) => {
			res.status(400).send();
		});
	}
});

app.post('/users', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);

	user.save().then( (user) => {
		// res.send(user);	
		return user.generateAuthToken();
	}).then((token) => {
		res.header('x-auth', token).send(user);
	}).catch((e) => {
		res.status(400).send(e);
	})
});

app.post('/users/login', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password).then((user) => {
		user.generateAuthToken().then((token) => {
			res.header('x-auth', token).send(user);
		});
	}).catch((e) => {
		res.status(400).send();
	});
});


app.get('/users/me', authenticate, (req, res) => {
	res.send(req.user);
});

app.delete('/users/me/token', authenticate, (req, res) => {
	req.user.removeToken(req.token).then(() => {
		res.status(200).send();
	}, () => {
		res.status(400).send();
	});
});


app.listen(port, () => {
	console.log('started on port ', port);
});


