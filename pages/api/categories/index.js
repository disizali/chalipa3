import { sequelize as db } from "../../../models";
import express from "express";
import cors from "cors";

const app = express();
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.get("/api/categories", async (req, res) => {
  const { Category } = db.models;
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
});

export default app;
