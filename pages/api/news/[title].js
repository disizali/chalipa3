import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const {
    query: { title }
  } = req;

  const { News } = db.models;
  const news = await News.findOne({ where: { title } });
  res.status(200).send(news);
};
