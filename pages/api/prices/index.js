import { sequelize as db } from "../../../models";
const { Price } = db.models;

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const prices = await Price.findAll();
      return res.status(200).send(prices);
      break;
    case "POST":
      const { code, size, price } = req.body;
      if (!code || !size || !price) return res.send("wrong data");
      const priceResult = await Price.create({ code, size, price });
      return res.status(200).send(priceResult ? priceResult : "error");
      break;
    case "DELETE":
      const destroy = await Price.destroy({ where: { id: req.body.targetId } });
      return res.status(200).send(destroy ? "done" : "no price");
      break;
    case "PUT":
      const { code : code2, size : size2, price : price2 } = req.body;
      if (!code2 || !size2 || !price2) return res.send("wrong data");
      const priceResult2 = await Price.update(req.body, {
        where: { id: req.body.targetId }
      });
      return res.status(200).send(priceResult2 ? priceResult2 : "error");
      break;
  }
};