const Student = require('../models').getModel('student');

const student = {
    Student,

    async add (stuData) {
        const result = await new Student(stuData).save();
        return result;
    },

    async update(query, stuData) {
        const result = await Student.update({...query}, {...stuData});
        return result;
    },

    async findOne(query) {
        const result = await Student.findOne(query);
        return result;
    }
};

module.exports = student;
