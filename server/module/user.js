var mongoose = require('mongoose');
var User = mongoose.model('User', {
	email: {
		type : String,
		require : true,
		trim: true,
		minlength : 1
	}
});

// var user = new User({
// 	email: 'example@example.com'
// });

// user.save().then( (doc) => {
// 	console.log('User saved ', doc);
// }, (err) => {
// 	console.log('unable to save the user ', err);
// });

module.exports = {User};