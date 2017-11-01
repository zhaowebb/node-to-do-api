var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
}

// var Todo = mongoose.model('Todo', {
// 	text: {
// 		type : String,
// 		require: true,
// 		minLength: 1,
// 		trim: true
// 	},
// 	completed: {
// 		type : Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type : Number,
// 		default: null
// 	}
// });

// // var newTodo = new Todo({
// // 	text: 'cook dinner'
// // });

// var newTodo = new Todo({
// 	text: ' study nodejs',
// });

// newTodo.save().then( (doc) => {
// 	console.log('saved todo', doc)
// }, (e) => {
// 	console.log('unable to save')
// });

// var User = mongoose.model('User', {
// 	email: {
// 		type : String,
// 		require : true,
// 		trim: true,
// 		minLength : 1
// 	}
// });

// var user = new User({
// 	email: 'example@example.com'
// });

// user.save().then( (doc) => {
// 	console.log('User saved ', doc);
// }, (err) => {
// 	console.log('unable to save the user ', err);
// });