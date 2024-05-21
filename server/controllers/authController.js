const User = require('../models/user');

// Handle incoming requests from clients and provide appropriate responses 
const test = (req, res) => {
    res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // Check if name is valid
        if (!name) {
            return res.json({
                error: 'Name was not entered'
            })
        };

        // Check if password is valid
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is not valid! Password needs to be at least 6 characters long'
            })
        };

        // Check if email is valid
        const exist = await User.findOne({email});
        if (exist) {
            return res.json({
                error: 'Email is already taken'
            })
        }

        // Create user in database
        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    } catch (error) {
        console.log(error);
    }
}

// Exporting the test function
module.exports = {
    test,
    registerUser
};
