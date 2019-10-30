import { sequelize as db } from "../../../models";
const { Product , Category} = db.models;
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      res.send(await Product.findAll({ order: [["id", "desc"]] , include :[{model :Category}]}));
      break;
    case "DELETE":
      res.send(await Product.destroy({ where: { id: req.body.targetId } }));
      break;
    case "POST":
      const validate = Object.values(req.body).every(item => item);
      if (!validate) return res.send("validation error");
      const product = await Product.create(req.body);
      res.send(product.id);
      break;
  }
};
