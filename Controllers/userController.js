const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email: email })
        if (existingUser) {
            res.status(406).json('Account already exist, please login')
        }
        else {
            const newUser = new users({
                username: username,
                email: email,
                password: password,
            })
            await newUser.save()
            res.status(200).json("registration request recieved successfully")
        }
    } catch (err) {
        res.status(401).json('Register request failed due to', err)
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser =await users.findOne({ email: email, password: password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, 'supersecretkey12345')
            res.status(200).json({
                existingUser,
                token
            })
        }
        else {
            res.status(406).json("Invalid email id or password")
        }

    } catch (err) {
        res.status(401).json("Login request failed due to", err)
    }
}