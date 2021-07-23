const jwt = require("jsonwebtoken");
const User = require("../../models/userModal");
const asyncHandler = require("express-async-handler");

const Auth = asyncHandler(async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await User.findById(decoded.id).select("-password");
			console.log(req.user);
			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error("Not authorized, token Failed");
		}
	} else if (!token) {
		res.status(401);
		throw new Error("Not Authorized");
	}
});
//check if the user is an admin
const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error("Not Authorized for the Route");
	}
};

module.exports = {
	Auth,
	admin,
};
