const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/users-model.js')

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const users = await Users.getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

module.exports = router