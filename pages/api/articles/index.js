import { sequelize as db } from "../../../models";
const { Article } = db.models;

const insertArticle = async (title, body, selectedImage) => {
  return await Article.create({ title, body, image: selectedImage });
};
const deleteArticle = async targetId => {
  return await Article.destroy({ where: { id: targetId } });
};

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      res.json(await Article.findAll({ order: [["id", "DESC"]] }));
      break;
    case "POST":
      res.send(
        await insertArticle(
          req.body.title,
          req.body.body,
          req.body.selectedImage
        )
      );
      break;
    case "DELETE":
      res.send(await deleteArticle(req.body.targetId));
      break;
  }
};
