const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
    file: {
        type: any,
        required: false,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    }

});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;