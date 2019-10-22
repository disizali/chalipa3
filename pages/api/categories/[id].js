import { sequelize as db } from "../../../models";
const { Category } = db.models;

export default async (req, res) => {
  const {
    query: { id }
  } = req;
  let category = await Category.findOne({
    where: { id },
    attributes: ["id", "title"],
    raw: true
  });
  let subCategories = await Category.findAll({
    where: { parent_category: category.id },
    attributes: ["id", "title"],
    raw: true
  });
  const test = {
    ...category,
    subCategories
  };
  res.send(test);
};
