const db = require('./dbConfig.js');

module.exports = {
    addUser,
    getUsers,
    getUserBy,
}

function getUsers() {
    return db('users')
}

function getUserBy(filter) {
    return db('users')
        .where(filter)
        .first()     
}

async function addUser(user) {
    const [id] = await db('users')
        .insert(user);

    return getUserBy({id})
}

