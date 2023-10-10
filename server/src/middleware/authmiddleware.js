const jwt = require('jsonwebtoken')
// const User = require("../models/UserModel")


const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, 'access_token', function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication1',
                status: 'ERROR'
            })
        }
        const {payload} = user
        if (payload?.isAdmin) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authemtication2',
                status: 'ERROR'
            })
        }
    });
}

const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, 'access_token', function (err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication1',
                status: 'ERROR'
            })
        }
        if (user?.isAdmin || user?.id === userId) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authemtication2',
                status: 'ERROR'
            })
        }
    });
}

module.exports = {
    authMiddleWare,
    authUserMiddleWare
}