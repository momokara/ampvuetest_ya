/**
 * 数据加密
 * @param {String} data 需要处理的数据
 * @return {Promise} 处理结果
 */
export const encrypt = (data) => {
  return wx.cloud.callFunction({
    name: 'docrypt',
    // 传给云函数的参数
    data: {
      type: 1,
      data: data
    }
  })
}

/**
 * 数据解密
 * @param {String} data 需要处理的数据
 * @return {Promise} 处理结果
 */
export const decrypt = (data) => {
  console.log(data)
  return wx.cloud.callFunction({
    name: 'docrypt',
    // 传给云函数的参数
    data: {
      type: 2,
      data: data
    }
  }).then(res => {
    if (res.result.res) {
      return res.result.res
    } else {
      return null
    }
  })
}

const crypt = {}
crypt.encrypt = encrypt
crypt.decrypt = decrypt
export default crypt

module.export = {
  encrypt,
  decrypt
}
