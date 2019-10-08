import { sequelize as db } from "../../../models";
const { Category } = db.models;

export default async (req, res) => {
  res.send(await Category.findAll());
};