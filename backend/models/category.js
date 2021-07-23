const mongoose = require("mongoose");
const slug = require("slugify");
const { default: slugify } = require("slugify");
const cateschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});
cateschema.pre("validate", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});
const cate = mongoose.model("categories", cateschema);
module.exports = cate;
