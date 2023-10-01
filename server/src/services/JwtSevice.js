const jwt = require('jsonwebtoken')

const genneralAccessToken = async (payload) => {
    console.log('payload',payload)
    const access_token = jwt.sign({
        payload
    },'access_token', { expiresIn: '30p' })

    return access_token
}
const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        payload
    },'refesh_token', { expiresIn: '365d' })

    return refresh_token
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}