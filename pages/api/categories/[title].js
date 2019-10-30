import { sequelize as db } from "../../../models";
const { Category } = db.models;

export default async (req, res) => {
  const {
    query: { title }
  } = req;
  let category = await Category.findOne({
    where: { title },
    attributes: ["id", "title","description"],
    raw: true
  });
  let subCategories = await Category.findAll({
    where: { parent_category: category.id },
    attributes: ["id", "title","description"],
    raw: true
  });
  const test = {
    ...category,
    subCategories
  };
  res.send(test);
};
