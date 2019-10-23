import { sequelize as db } from "../../../models";
const { News } = db.models;
export default async (req, res) => {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      const news = await News.findAll();
      res.status(200).send(news);
      break;
    case "POST":
      const { title, image, body } = req.body;
      if (!title || !image || !body) return res.send("wrong data");
      res.status(200).send(await News.create(req.body));
      break;
    case "DELETE":
      const destroy = await News.destroy({ where: { id: req.body.targetId } });
      res.status(200).send(destroy ? "done" : "no news");
      break;
  }
};
