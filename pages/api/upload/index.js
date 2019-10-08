import express from "express";
import multer from "multer";
const app = express();
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});
var upload = multer({ storage: storage });

const custom = (req, res, next) => {
  console.log("CUSTOM MIDDLEWARE WROKED");
  next();
};

app.post("/api/upload", [custom, upload.single("myImage")], (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

export default app;
