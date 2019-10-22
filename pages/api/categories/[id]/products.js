import { sequelize as db } from "../../../../models";
const { Product } = db.models;

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  res.send(
    await Product.findAll({
      where: { category: id },
      attributes: { exclude: ["createdAt","updatedAt"] }
    })
  );
};
