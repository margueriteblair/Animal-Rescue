const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 80,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 80,
        unique: false
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200,
        unique: true
    },
    animal: {
        type: String,
        required: false,
        minlength: 2
    }
})

const AnimalFormModel = mongoose.model('animal', AnimalSchema)

module.exports = AnimalFormModel;