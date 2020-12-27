// 返回数据对象
const resultData = (code, success, messge, data, token) => {
    code = code ? code : 99999
    success = success ? success : false
    messge = messge ? messge : '服务器无返回信息'
    data = data ? data : null
    if (token) {
        return { code, success, messge, data, token }
    } else {
        return { code, success, messge, data }
    }
}

const fs = require('fs')
// 创建文件夹
const createFolder = function (folder) {
    try {
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder);
    } catch (e) {
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }
};

module.exports = {
    resultData,
    createFolder
}