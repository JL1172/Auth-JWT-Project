const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../../secrets");
const db = require("../../data/db-config");
const UserData = require("../users/user-model");

module.exports = {tokenBuilder}

async function tokenBuilder(user, userToCompare) {
    const {user_id} = userToCompare;
    const result = await UserData.findByFilter({user_id : user_id})
    const payload = {
        subject : user_id,
        username : user.user_username,
        role_name : result.role_name
    }
    const options = {
        expiresIn : "1d"
    }
    
    return jwt.sign(payload,JWT_SECRET,options);
}