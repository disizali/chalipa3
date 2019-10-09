import fs from "fs";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      const imagesLis = fs
        .readdirSync("static/uploads/images/")
        .sort((a, b) => {
          const [first, second] = [a.split("-")[0], b.split("-")[0]];
          return second - first;
        });
      res.send(imagesLis);
    case "DELETE":
      fs.unlinkSync("static/uploads/images/" + req.body.targetFileName);
      res.send("deleted");
  }
};
