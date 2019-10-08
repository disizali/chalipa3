import jwt from "jsonwebtoken";

const verifyUsername = (username, password) => {
  return username == "chalipa" && password == "chalipa@apweb";
};

export default (req, res) => {
  const { username, password, authToken } = req.body;
  if (authToken != undefined) {
    let { username, password } = jwt.verify(authToken, "chalipasecret");
    if (verifyUsername(username, password)) {
      return res.status(200).send("verified");
    }
  }
  if (verifyUsername(username, password)) {
    return res
      .status(200)
      .send(jwt.sign({ username, password }, "chalipasecret"));
  }
  return res.status(203).send("unauthorized");
};
