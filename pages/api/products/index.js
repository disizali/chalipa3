import { sequelize as db } from "../../../models";
const { Product, Category } = db.models;
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      res.send(
        await Product.findAll({
          order: [["id", "desc"]],
          include: [{ model: Category }]
        })
      );
      break;
    case "DELETE":
      res.send(await Product.destroy({ where: { id: req.body.targetId } }));
      break;
    case "POST":
      const validatePost = Object.values(req.body).every(item => item);
      if (!validatePost) return res.send("validation error");
      const product = await Product.create(req.body);
      res.send(product.id);
      break;
    case "PUT":
      const validatePut = Object.values(req.body).every(item => item);
      if (!validatePut) return res.send("validation error");
      const updated = await Product.update(req.body, {
        where: { id: req.body.id }
      });
      res.send(updated ? "updated" : "no product");
      break;
  }
};