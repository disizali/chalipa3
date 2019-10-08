import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const { News } = db.models;
  const news = await News.findByPk(id);
  res.status(200).send(news);
};
