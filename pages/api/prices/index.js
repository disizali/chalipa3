import { sequelize as db } from "../../../models";
const { Price } = db.models;

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const prices = await Price.findAll();
      res.status(200).send(prices);
      break;
    case "POST":
      const { name, size, price } = req.body;
      if (!name || !size || !price) return res.send("wrong data");
      const create = await Price.create({ name, size, price });
      res.status(200).send(create ? "done" : "error");
      break;
    case "DELETE":
      const destroy = await Price.destroy({ where: { id: req.body.targetId } });
      res.status(200).send(destroy ? "done" : "no price");
      break;
  }
};
