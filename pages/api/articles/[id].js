import { sequelize as db } from "../../../models";
const { Article } = db.models;

export default async (req, res) => {
  const {
    query: { id }
  } = req;
  const article = await Article.findByPk(id);
  res.status(200).send(article);
};
