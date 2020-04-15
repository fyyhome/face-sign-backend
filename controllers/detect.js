const pca = require('../lib/pca');
const {computeTrainResult} = require('./common');
const studentService = require('../services').student;

const detect = {};

detect.detect = async (ctx, next) => {
    const { faceData } = ctx.request.body;
    if (!ctx.trainedResult) {
        ctx.trainedResult = await computeTrainResult();
    }

    const detectResult = pca.pcaExec(faceData, ctx.trainedResult);
    const responseData = await studentService.findOne({stuNumber: detectResult});
    console.log(detectResult, '识别done');

    ctx.code = 200;
    ctx.msg = '识别成功';
    ctx.result = {
        stuNumber: responseData.stuNumber,
        stuName: responseData.stuName,
        classNumber: responseData.classNumber
    };

    return next();
}

module.exports = detect;
