const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('todo',todoSchema)