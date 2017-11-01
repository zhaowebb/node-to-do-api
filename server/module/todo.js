var mongoose = require("mongoose");

var Todo = mongoose.model('Todo', {
	text: {
		type : String,
		require: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type : Boolean,
		default: false
	},
	completedAt: {
		type : Number,
		default: null
	}
});

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
module.exports = {Todo};