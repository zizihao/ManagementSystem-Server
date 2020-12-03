const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ messge: "请求成功" });
});

module.exports = router;
