import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const { Message } = db.models;
  Message.create(req.body).then(() => {
    res.status(200).send("done");
  });
};
