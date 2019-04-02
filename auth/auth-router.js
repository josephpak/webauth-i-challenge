const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../data/helpers/users-model.js')

const router = express.Router();

router.post('/register', async (req,res) => { 
    try {
        let user = req.body;
        const hash = bcrypt.hashSync(user.password, 4)
        user.password = hash;

        const newUser = await Users.addUser(user)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req,res) => {
    try {
        let { username, password } = req.body
    
        const user = await Users.getUserBy({ username })
        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({
                message: `Welcome ${user.username}!`
            })
        } else {
            res.status(401).json({
                message: 'Invalid Credentials'
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;