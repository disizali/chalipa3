import { sequelize as db } from "../../../models";
const { Article } = db.models;

export default async (req, res) => {
  const {
    query: { title }
  } = req;
  const article = await Article.findOne({ where: { title } });
  res.status(200).send(article);
};
