const {SHA256} = require('crypto-js');

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();
// console.log(`Message : ${hash}`);
// console.log(message);

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + "secrect").toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + "secrect").toString();

// if(resultHash === token.hash) {
// 	console.log('data was not changed');
// }else{
// 	console.log('data was changed');
// }

// const jwt = require('jsonwebtoken');

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');

// console.log(token);
// var decoded = jwt.verify(token, '123abc');

// console.log(decoded);

const bcrypt = require('bcryptjs');
var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashPassword = '$2a$10$Dy8ez61JRsqAJXbSvmFgKOcx9bfnagaPwi1IDLVMSbv45I4jvC3Jy';

bcrypt.compare(password, hashPassword, (err, res)=>{
	console.log(res);
});








