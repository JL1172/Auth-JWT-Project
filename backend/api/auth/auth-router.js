const express = require("express");
const bcrypt = require("bcryptjs");
const {checkUsername,checkPassword,checkRole,checkUsernameExists} = require("./auth-middleware");
const { BCRYPT_ROUNDS } = require("../../config");
const UserData = require("../users/user-model");
const { tokenBuilder } = require("./auth-token-builder");

const router = express.Router();

router.post("/register",checkUsername,checkPassword,checkRole,async(req,res,next)=> {
    try {   
        const {user_username,user_password,role_name} = req.body;
        const hash = bcrypt.hashSync(user_password,BCRYPT_ROUNDS);
        const newUser = {
            user_username : user_username,
            user_password : hash,
            role_name : role_name,
        }
        const result = await UserData.add(newUser);
        res.status(201).json(result);
    } catch (err) {next(err)}
})

router.post("/login",checkUsernameExists,async(req,res,next)=> {
    try {
        const {user_username, user_password} = req.body;
        if (bcrypt.compareSync(user_password,req.user.user_password)) {
            const token = await tokenBuilder(req.body, req.user);
            res.status(200).json({token : token, message : `Welcome back ${user_username}`}); 
        } else {
            next({status : 403, message : "Invalid credentials"})
        }
    } catch (err) {next(err)}
})


module.exports = router;