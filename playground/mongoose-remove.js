const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {ObjectId} = require('mongodb');
const {User} = require('./../server/models/user.js');

//remove many
//remove all
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('59f932167dd65235c7c0d1b2').then((todo) => {
	console.log(todo)
});