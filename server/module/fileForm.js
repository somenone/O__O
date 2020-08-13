const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileForm = new Schema({
    filename: String,
    fileurl: String,
    time: { type: Date, default: Date.now() },
    uper: String,
    path: String
})

module.exports = mongoose.model('fileForm', fileForm);
