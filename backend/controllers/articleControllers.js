const asyncHandler = require("express-async-handler");
const Article = require("../models/articleModal");

//@desc create article
//@route Post /api/article/createArticle
//@access Private
const createArticle = asyncHandler(async (req, res) => {
	const newpost = new Article({
		title: req.body.title,
		author: req.user._id,
		description: req.body.description,
		body: req.body.body,
		category: req.body.categories,
		imageref: "/uploads/sample",
	});
	try {
		await newpost.save();
		res.status(201).json(newpost);
	} catch (error) {
		console.log(error);
	}
});

//@desc fetch all article
//@route Get /api/article/
//@access Public
const getArticles = asyncHandler(async (req, res) => {
	const posts = await Article.find({});
	res.status(200).json(posts);
});
//@desc fetch single  article
//@route get /api/article/:slug
//@access public
const singleGetArticle = asyncHandler(async(req,res)=>{
const slug = req.params.slug;
const post = await Article.findOne({slug})
if(post){
	res.status(200).json(post)
}else{
	res.status(404)
	throw new Error("Article not found")
}

})
//@desc delete single article article
//@route delete /api/article/:id
//@access private
const deleteArticle = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const post = await Article.findById(id);
	if (post) {
		await post.remove();
		res.json({ message: "article deleted successfuly" });
	} else {
		res.status(404);
		throw new Error("Article not found");
	}
});

//@desc update single  article
//@route delete /api/article/:id
//@access private
const updateArticle = asyncHandler(async (req, res) => {
	const { title, description, body, imageref } = req.body;
	const post =  await Article.findById(req.params.id);
	if (post) {
		post.title=title
		post.description=description
		post.body=body
		post.imageref=imageref

		await post.save()
		res.status(201).json(post)
	}else{
		res.status(404)
		throw new Error("post not found")
	}
});

module.exports = {
	createArticle,
	getArticles,
	deleteArticle,
	updateArticle,
	singleGetArticle
};
