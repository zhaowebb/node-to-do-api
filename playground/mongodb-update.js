const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');


	//find one and update
	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID('59f92b912d44db2c4c2fefdb')
	// }, {
	// 	$set:{
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		name : 'andrew'
	}, {
		$set:{
			name : 'mike'
		},
		$inc:{
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	// db.close();

});