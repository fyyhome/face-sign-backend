const studentService = require('../services').student;
const pca = require('../lib/pca');


const computeTrainResult = async () => {
    const docs = await studentService.Student.find();
    const sourceFace = [],
            stuNumberMap = new Map();
    let count = 0;
    
    docs.forEach(doc => {
        doc.faceData.forEach(face => {
            const flatFace = [];
            face.forEach(row => flatFace.push(...row));
            sourceFace.push(flatFace);
            stuNumberMap.set(count, doc.stuNumber);
            count++;
        });
    });
    console.log('训练集done');
    return pca.pcaTrain(sourceFace, stuNumberMap);
};

module.exports = {
    computeTrainResult
};
