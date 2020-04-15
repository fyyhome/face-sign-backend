module.exports = {
    name: 'student',
    schema: {
        stuName: String, // 姓名
        stuNumber: {type: String, unique: true, index: true}, // 学号
        classNumber: String, // 班级
        faceData: Array, // 人脸数据集
    }
}