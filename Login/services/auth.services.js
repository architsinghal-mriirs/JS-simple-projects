const {User} = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signup = async (data) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (err) {
        console.log(err);
        if(err.name == 'SequelizeValidationError' || err.name == 'SequelizeUniqueConstraintError') {
            return {
                error: err.message,
                details: err.errors[0].message
            }
        }
    }
}

const getUserByEmail = async (userEmail) => {
    try {
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        return user;
    } catch (err) {
        console.log(err);
        return {
            error: err.message
        }
    }
}

const checkPassword = (userPass, encryptPass) => {
    return bcrypt.compareSync(userPass, encryptPass);
}

const createToken = (user) => {
    try {
        return jwt.sign(user, 'relevel', {
            expiresIn: '2 days'
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signup,
    getUserByEmail,
    checkPassword,
    createToken
}