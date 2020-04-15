const userService = require('../services').user;
const { InvalidQueryError } = require('../lib/error');

const register = {};

register.register = async (ctx, next) => {
    const { username, phone, password } = ctx.request.body;
    if (!username || !phone || !password) {
        throw new InvalidQueryError();
    } else {
        const isRegister = await userService.User.findOne({phone});
        if (isRegister) {
            ctx.code = 403;
            ctx.msg = '您已注册过，不能重复注册!';
            ctx.result = '';
        } else {
            const result = await userService.register({
                username,
                password,
                phone
            });
            ctx.msg = '注册成功!';
            ctx.result = '';
        }
    }

    return next();
}

module.exports = register;
