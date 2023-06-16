const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: { type: String, required: true },
    cl: { type: String, required: true },
    time: { type: String, default: 'NA' },
    date: { type: String, default: 'NA'},
    section: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)