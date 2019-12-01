const todoList = require('../models/todoList')

module.exports = {
    create: (req, res, next) => {
        todoList.create({
            name: req.body.name,
            task: req.body.task
        },
        (err, result) => {
            if(err)
            next(err)
            else res.json(result)
        })
    },
    getAll: (req, res, next) => {
        todoList.find({}).then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    }
}