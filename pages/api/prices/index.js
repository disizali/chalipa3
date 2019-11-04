import { sequelize as db } from "../../../models";
const { Price } = db.models;

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const prices = await Price.findAll();
      res.status(200).send(prices);
      break;
    case "POST":
      const { code, size, price } = req.body;
      if (!code || !size || !price) return res.send("wrong data");
      const priceResult = await Price.create({ code, size, price });
      res.status(200).send(priceResult ? priceResult : "error");
      break;
    case "DELETE":
      const destroy = await Price.destroy({ where: { id: req.body.targetId } });
      res.status(200).send(destroy ? "done" : "no price");
      break;
  }
};