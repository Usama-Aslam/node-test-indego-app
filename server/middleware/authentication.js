const auth = (req, res, next) => {
  try {
    const validToken = process.env.token;
    let token = req.header("Authorization");

    if (!token) throw new Error("token not found");
    token = token.replace("Bearer ", "");

    if (token != validToken) throw new Error("invalid token");
    next();
  } catch (error) {
    res.status(401).send({ error: { message: error.message } });
  }
};

module.exports = { auth };
