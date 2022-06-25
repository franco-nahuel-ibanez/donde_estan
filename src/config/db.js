const { connect } = require('mongoose')

const connectDB = async () => {
    try {
        await connect('mongodb://localhost/donde_estan_db')
        console.log('### MongoDB Connected ###')
    } catch (error) {
        console.log('Failed Connecting to MongoBD', error)
    }
}

module.exports = connectDB