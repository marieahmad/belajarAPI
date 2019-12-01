const express = require('express')
const router = express.Router()

const todoList = require('../controllers/todoList')

// create data to DB
router.post('/create', todoList.create)

// get data from DB
router.get('/getdata', todoList.getAll)

module.exports = router