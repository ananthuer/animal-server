const jwt = require("jsonwebtoken");


const isAdmin = (req, res, next) => {
  const token =  req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  
  try {
    const decoded = jwt.verify(token, "qwerty");
    req.user = decoded;
    let role = req.user.role
    if (role == 'Admin' || role == "admin") {
      return next()
    }

    return res.status(403).json({
      message: "You are not an admin"
    })
  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = isAdmin;