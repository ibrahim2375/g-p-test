// const sharp = require('sharp');
const fs = require('fs')
const User = require("../../models/user")

const methods = {
    async getUsers() {
        const users = await User.findAll();
        return users;
    }
}

module.exports = { ...methods }