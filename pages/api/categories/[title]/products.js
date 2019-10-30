import { sequelize as db } from "../../../../models";
const { Product, Category } = db.models;

export default async (req, res) => {
  const {
    query: { title }
  } = req;

  const {id} = await Category.findOne({ where: {title}, attributes: ["id"] });
  res.send(
    await Product.findAll({
      where: { category: id },
      attributes: { exclude: ["createdAt", "updatedAt"] }
    })
  );
};