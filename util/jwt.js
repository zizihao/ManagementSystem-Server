const jwt = require("jsonwebtoken");
// 密钥，用来验证真伪
const key = "chen";
// 生成token
const createToken = function (username) {
  const token = jwt.sign({ username }, key, { expiresIn: "24h" });
  return token;
};

// 验证token是否有效
const verifyToken = function (token) {
  try {
    jwt.verify(token, key);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
    createToken,
    verifyToken
}