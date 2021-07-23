const mongoose = require('mongoose')
const Article = require('../models/articleModal')
const User = require('../models/userModal')
const articles = require('./featured')
const users = require('./users')
require('../utils/config/db')

const importData = async()=>{
    try {
        await Article.deleteMany()
        await User.deleteMany()
        const createdUser = await User.insertMany(users)
        const adminUser = createdUser[0]._id
        const samplePost = articles.map(post=>{
            return{...post,author:adminUser}
        })
        await Article.insertMany(samplePost)
        console.log("Data Imported");
        process.exit()
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

importData()