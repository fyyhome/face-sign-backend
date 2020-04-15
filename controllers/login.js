'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const userServices = require('../services').user
const { InvalidQueryError } = require('../lib/error')
const login = {}
login.login = async (ctx, next) => {
    const {username, password} = ctx.request.body
    if (!username || !password) {
        throw new InvalidQueryError()
    }
    const user = await userServices.login({
        username,
        password
    })
    if (!user) {
        ctx.code = 401
        ctx.result = ''
        ctx.msg = '用户不存在'
    } else {
        ctx.result = jwt.sign({
            data: user._id,
            // 设置 token 过期时间
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
        }, config.secret)
    }
    return next()
}

module.exports = login
