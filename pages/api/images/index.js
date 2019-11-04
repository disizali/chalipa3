import fs from "fs";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      const imagesLis = fs
        .readdirSync("public/static/uploads/images/")
        .sort((a, b) => {
          const [first, second] = [a.split("-")[0], b.split("-")[0]];
          return second - first;
        });
      res.send(imagesLis);
      break;
    case "DELETE":
      fs.unlinkSync("public/static/uploads/images/" + req.body.targetFileName);
      res.send("deleted");
      break;
  }
};
