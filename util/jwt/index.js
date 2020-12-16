const {sign,decode,verify} = require('jsonwebtoken');

// 生成token
/**
 * 
 * @param {object} data 
 */
function createToken(data){
  const token=sign(data, 'management-system', { algorithm: 'HS256',expiresIn:'2h'});
  return token
}


// 验证token
function verifyToken(token){
  try {
    const verifyResult=verify(token,'management-system');
    return verifyResult
  } catch (error) {
    return false
  }
}

// 解密token
function decodeToken(token){
  const decodeResult=decode(token)
  return decodeResult
}

module.exports = {
  createToken,
  verifyToken,
  decodeToken
}
