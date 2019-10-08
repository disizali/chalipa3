import fs from "fs";

export default async (req, res) => {
  fs.writeFileSync("./test.txt", "hellow");
  res.send("ok");
};
