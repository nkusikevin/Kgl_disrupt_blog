const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
require("./utils/config/db");
const dotenv = require("dotenv");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const articleRoutes = require("./routes/articleRoutes");
const userRoutes = require("./routes/userRoutes");
const uploadImages = require("./routes/uploadsRoute");
const { notFound, errorHandler } = require("./utils/middleWare/errorHandle");
dotenv.config();
app.use(express.json());

// making uploads folder static
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
//end-points
app.use("/api/article", articleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadImages);
app.use(notFound);
app.use(errorHandler);
// app.use((error, req, res, next) => {
//   console.log("This is the rejected field ->", error.field);
// });
app.get("/", (req, res) => {
  res.status(200).send("hell other");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server is on port 4000"));
