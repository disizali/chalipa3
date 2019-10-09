const express = require('express');
const fileUpload = require("express-fileupload");
const app = express();

// default options
app.use(fileUpload());

app.post("/api/upload", function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv("/static/uploads/images/filename.jpg", function(err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
  });
});

export default app;