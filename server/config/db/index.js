const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/NienLuan_DEV', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('connect failure')
    }
}

module.exports = {connect};