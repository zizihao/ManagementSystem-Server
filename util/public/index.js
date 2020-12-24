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
module.exports = { resultData }