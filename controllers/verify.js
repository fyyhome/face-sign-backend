const userServices = require('../services').user;

const verify = {};

verify.verify = async (ctx, next) => {
    const { data } = ctx.jwtData;
    const result = await userServices.User.findOne({_id: data});
    if (result) {
        ctx.msg = '认证通过';
        ctx.result = result;
    } else {
        ctx.code = 401;
        ctx.msg = '认证失败';
        ctx.result = '';
    }

    return next();
}

module.exports = verify;
