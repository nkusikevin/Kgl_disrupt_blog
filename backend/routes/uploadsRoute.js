const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFiletype(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );

  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("image only");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFiletype(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false,
    });
  } else {
    console.log("file received");
    return res.send(`/${req.file.path}`);
  }
});

module.exports = router;
