// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {
// 	name: 'andrew',
// 	age: 25
// }

// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: "something to do",
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('unable to insert to do', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'wei',
	// 	age: 25,
	// 	location: 'philadelphia'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('unable to insert user', err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();

});