const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/users-model.js')

const restricted = require('../middleware/restricted.js');

const router = express.Router();

router.get('/', restricted, async (req,res) => {
    try {
        const users = await Users.getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

module.exports = router