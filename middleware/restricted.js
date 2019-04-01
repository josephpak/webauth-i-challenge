const bcrypt = require('bcryptjs')
const Users = require('../data/helpers/users-module')

async function restricted (req,res,next) {
    const { username, password } = req.headers;
  
    if (username && password) {
        
        try {
            const user = await Users.getUserBy({ username })
            if (user && bcrypt.compareSync(password, user.password)) {
                next()
            } else {
                res.status(401).json({ message: "Invalid Credentials" })
            }
        } catch (error) {
            res.status(500).json({
                message: "Error"
            })
        }
    } else {
      res.status(401).json({ message: "Please provide credentials" })
    }
    
  }

module.exports = restricted  