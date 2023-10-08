const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require("../services/JwtService")

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: "the email already"
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            console.log('hash', hash)
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                phone,
            })
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: "SUCCESS",
                    createdUser
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin
        try {
            const checkUser = await User.findOne({
                email
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: "the user is not defined"
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            
            if (!comparePassword) {
                resolve({
                    status: 'ERR',
                    message: 'the password user is incorect'
                })
            } 
          
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            const refresh_token =  await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            // console.log('acccc',access_token)
            // console.log('acccc',refresh_token)
            resolve({
                status: 'OK',
                message: 
                checkUser,
                access_token,
                refresh_token,
            })
        
            // console.log('accccess',access_token)
            // }

        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser
}