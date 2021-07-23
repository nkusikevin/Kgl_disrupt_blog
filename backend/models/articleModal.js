const mongoose = require("mongoose");
const slug = require("slugify");
const { default: slugify } = require("slugify");
const postschema = new mongoose.Schema(
	{
		categories: {
			type: String,
			required:true
		},
		title: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
		description: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			require:true
		},
		views: {
			type: Number,
			required: true,
			default: 0,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

postschema.pre("validate", function (next) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});

const post = mongoose.model("blogpost", postschema);
module.exports = post;
