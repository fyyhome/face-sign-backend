'use strict'

module.exports = {
  name: "user",
  schema: {
    username: String, // 用户名
    password: String, // 密码
    phone: {type: String, unique: true, index: true}, // 手机号
  }
};
