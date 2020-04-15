const studentService = require('../services').student;
const {computeTrainResult} = require('./common');

const addStudent = {};

/**
 * number[][][] faceData 人脸数据数组
 */
addStudent.addStudent = async (ctx, next) => {
    // // 清空数据
    // const res = await studentService.Student.remove();
    // console.log(res, 'remove res');

    const {stuName, stuNumber, classNumber, faceData} = ctx.request.body
    const stu = await studentService.findOne({stuNumber});
    if (stu) {
        const newStu = {
            stuName,
            classNumber,
            faceData: [...stu.faceData, ...faceData]
        };
        await studentService.update({stuNumber}, newStu);
    } else {
        await studentService.add({stuName, stuNumber, classNumber, faceData});
    }
    ctx.code = 200;
    ctx.msg = '添加成功';
    ctx.result = '';
    
    computeTrainResult().then(trainedResult => {
        ctx.trainedResult = trainedResult;
        console.log(trainedResult, 'trainedResult');
    });

    return next();
};

module.exports = addStudent;
