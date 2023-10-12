const mongo = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },
    email: String,
    phoneNumber: String,
    age: Number,
    dateOfReg: {
        type: Date,
        default: Date.now
    }
})

const User = mongo.model('user', userSchema)

module.exports = User

 