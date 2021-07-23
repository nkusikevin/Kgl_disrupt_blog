const express = require('express')
const router = express.Router()
const {
	createArticle,
	getArticles,
	deleteArticle,
	updateArticle,
	singleGetArticle
} = require("../controllers/articleControllers");
const{Auth,admin} = require('../utils/middleWare/auth')

router.route('/').get(getArticles)
router.route("/create").post(Auth,createArticle);
router.route("/:id").delete(Auth,admin,deleteArticle).put(Auth,updateArticle);
router.route("/:slug").get(singleGetArticle);

module.exports=router