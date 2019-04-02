const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session)


const authRouter = require("../auth/auth-router.js")
const usersRouter = require("../users/users-router.js")
const configuredKnex = require("../data/dbConfig")

const server = express();

const sessionConfig = {
    name: 'users',
    secret: 'Some secret',
    cookie: {
        maxAge: 1000 * 60 * 15,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: configuredKnex,
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
}
 
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))

server.use('/api/auth/', authRouter)
server.use('/api/users/', usersRouter)

module.exports = server;