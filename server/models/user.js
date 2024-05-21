const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a new schema for the user collection to define the structure of the data
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

// Create model from the schema to represent the 'User' collection in the database
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;