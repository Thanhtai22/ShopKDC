const UserService = require('../services/UserService')
// const JwtService = require('../services/JwtService')
const User = require('../models/UserModel')

const createUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!email || !password || !confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'email hoặc mật khẩu không chính xác'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'nhập email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'sai confirmPassword'
            })
        }
        
        const result = await UserService.createUser(req.body)
        return res.status(200).json(result)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
    
}
const loginUser = async (req, res) => {
    try {
        const { email, password, confirmPassword} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!email || !password ) {
            return res.status(200).json('email hoặc mật khẩu không chính xác')
        } if (!isCheckEmail) {
            return res.status(200).json('nhập email')
        } 
        
        const repons = await UserService.loginUser(req.body)
        return res.status(200).json(repons)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
    
}

module.exports = {
    createUser,
    loginUser
}