import { sequelize as db } from "../../../models";
const { Category } = db.models;

export default async (req, res) => {
  let categories = await Category.findAll({
    attributes: ["id", "title", "parent_category"],
    raw: true
  });

  let finalCategories = categories.filter(item => item.parent_category == 0);

  finalCategories = finalCategories.map(parentItem => {
    const newValue = {
      ...parentItem,
      subCategories: categories.filter(item => {
        return item.parent_category == parentItem.id;
      })
    };

    return newValue;
  });
  res.send(finalCategories);
};
