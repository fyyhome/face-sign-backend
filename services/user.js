
const User = require('../models/index').getModel('user')

const user = {
    User,
    /**
     * @Description:
     * @date 2019/5/30
     * @params: { Object } userData
     * @return: { Object | null }
     */
    async login (userData) {
        let result = await User.findOne(userData)
        return result
    },

    async register (userData) {
        let result = await new User(userData).save();
        return result;
    },

    async remove (userData) {
        let result = await User.remove(userData);
        return result;
    }
}

module.exports = user
