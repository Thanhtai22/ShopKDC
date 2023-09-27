const { createUser } = require('../controllers/UserController');
const UserRouter = require('./UserRouter');
const routes = (app) => {
    app.use('/api/user',createUser)
}

module.exports = routes
