// 返回数据对象
function ResultData(code, success, messge, data, token) {
    this.code = code ? code : 99999
    this.success = success ? success : false
    this.messge = messge ? messge : '服务器无返回信息'
    this.data = data ? data : null
    if (token) {
        this.token = token
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

const moment = require('moment');
 moment.locale('zh-cn');
// 处理时间
const newDate = (date)=>{
    let _today = moment(date);
    let newdate = _today.format('YYYY-MM-DD'); /*现在的时间*/
    return newdate
}

module.exports = {
    ResultData,
    createFolder,
    newDate
}