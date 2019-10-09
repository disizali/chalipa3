const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./static/uploads/images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage });
app.post("/api/upload", upload.single("image"), (req, res) => {
  console.log(req.file.filename);
  res.send(req.file ? req.file.filename : "not uploaded");
});

app.listen("3001", () => {
  console.log("server is running on port 3001");
});
