const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	//delete many
	// db.collection('Users').deleteMany({name : 'wei'}).then(
	// 	(result) => {
	// 		console.log(result);
	// 	});

	//delet one
	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then(
	// 	(result) => {
	// 		console.log(result);
	// 	});

	//find one and delete
	db.collection('Users').findOneAndDelete({
		_id : new ObjectID("59f8fd61eee11ac56937316e")}).then(
		(result) => {
			console.log(JSON.stringify(result, undefined, 2));
		});
	// db.close();

});