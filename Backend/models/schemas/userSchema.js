const mongoose = require('mongoose');
const { constants } = require('../../utils/constants');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    about: {
        type: String,
        required: false,
        default: constants.user.default.about,
    },
    picture: {
        type: String,
        required: false,
        default: process.env.DEFAULT_USER_PROFILE
    },
    status: {
        type: String,
        required: true,
        enum: [constants.user.status.ONLINE, constants.user.status.OFFLINE],
    },
    verified: {
        type: Boolean,
        required: true,
        enum: [constants.bool.TRUE, constants.bool.FALSE],
        default: constants.bool.FALSE,
    }
},
{
    timestamps: true,
});

module.exports = userSchema;
