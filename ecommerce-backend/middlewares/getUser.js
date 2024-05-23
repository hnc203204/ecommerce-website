const { errorHandler } = require("../utils");
const jwt = require("jsonwebtoken");

module.exports = (name = "admin") => {
  return (req, res, next) => {
    try{
        let token = req.get("Authorization");
    }  catch (error) {
        next();
    }

    if (!token) {
      next();
    }

    token = token.split(" ")[1];

    try {
      var tokenData = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
      next();
    }

    if (name === "user") req.userId = tokenData.userId;

    next();
  };
};
