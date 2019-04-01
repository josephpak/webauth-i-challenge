const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())

server.post('/api/register', (req,res) => {
    let user = req.body;
    let { username, password } = user

    const hash = bcrypt.hashSync(password, 4)
    password = hash;

})

module.exports = server;