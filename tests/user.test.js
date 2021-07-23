const request = require("supertest");
const {registerUser} = require("../controllers/userController");
test("Should register a user", async () => {
	await request(registerUser)
		.post("/api/users")
		.send({
			username: "Andrew",
			email: "andrew@example.com",
			password: "123456",
		})
		.expect(201);
});
