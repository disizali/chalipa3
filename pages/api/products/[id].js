import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const { Product } = db.models;
  const product = await Product.findByPk(id);
  res.status(200).send(product);
};
