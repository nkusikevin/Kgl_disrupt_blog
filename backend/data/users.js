const bcrypt = require('bcryptjs')
const users = [
	{
		username: "kevin",
		email: "nkusikvnhart@gmail.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		username: "hart",
		email: "kvnhart@gmail.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		username: "nkusi",
		email: "nkusi@gmail.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

module.exports= users