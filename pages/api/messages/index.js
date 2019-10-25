import { sequelize as db } from "../../../models";
const { Message } = db.models;
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const messages = await Message.findAll({ order: [["id", "desc"]] });
      res.status(200).send(messages);
      break;
  }
};
