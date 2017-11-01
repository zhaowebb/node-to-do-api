const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {ObjectId} = require('mongodb');
const {User} = require('./../server/models/user.js');

// var id = '59f9443095ba6d08c8964f0f';

// if(!ObjectId.isValid(id)){
// 	console.log('id not valid');
// }

// Todo.find({
// 	_id : id
// }).then( (todos) => {
// 	console.log('Todos ', todos);
// });

// Todo.findOne({
// 	completed: false
// }).then( (todo) => {
// 	console.log('Todo ', todo)
// });

// Todo.findById(id).then( (todo) => {
// 	if(!todo){
// 		return console.log('id not found');
// 	}
// 	console.log('Todo ', todo)
// }).catch( (e) => console.log(e));
User.findById('59f93b8f028d4a9ac7735850').then((user) => {
	if(!user){
		return console.log('unable to find user');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {

});