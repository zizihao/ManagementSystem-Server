const express = require('express');
const router = express.Router();
const { ResultData, createFolder } = require('../util/public')
const multer = require('multer');
const fs = require("fs");
const { myUrl } = require('../util/myPort')

const filePath = './public/upload/images/'  // 这里指的是node开服务的跟地址
// 创建文件夹
createFolder(filePath)

router.post('/', multer({
    //设置文件存储路径
    dest: filePath,
}).array("file", 1), function (req, res, next) {
    try {
        const file = req.files[0];
        const path = filePath + Date.now().toString() + "_" + file.originalname;   // 新名路径
        fs.renameSync(filePath + file.filename, path);  // 重名名
        //获取文件基本信息
        const fileInfo = {
            type: file.mimetype,
            name: file.originalname,
            size: file.size,
            path: myUrl + path.replace('./public/','/') // 拼接地址
        }
        const successVal = new ResultData(200, true, "上传成功", fileInfo)
        res.send(successVal);
    } catch (error) {
        const errVal = new ResultData(500, false, "上传失败")
        res.send(errVal);
    }
})
module.exports = router