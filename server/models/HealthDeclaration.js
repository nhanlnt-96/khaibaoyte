const mongoose = require('mongoose');

const HealthDeclaration = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    question1a: {
        type: String,
        required: true
    },
    question1b: {
        type: String,
        required: true
    },
    question1c: {
        type: String,
        required: true
    },
    question2: {
        type: String,
        required: true
    },
    question3: {
        type: Array,
        required: true
    },
    question4: {
        type: Array,
        required: true
    },
    question5: {
        type: String,
        required: true
    },
})

const HealthDeclarationResult = mongoose.model('HDResult', HealthDeclaration);
module.exports = HealthDeclarationResult;