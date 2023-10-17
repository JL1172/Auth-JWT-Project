const express = require("express");
const UserData = require("./user-model");
const { checkUsernameExists, onlyUser, restrict, only, checkPassword, checkRole } = require("../auth/auth-middleware");
const { BCRYPT_ROUNDS } = require("../../config");
const bcrypt = require("bcryptjs")

const router = express.Router();

router.get("/", restrict, only("admin"), async (req, res, next) => {
    try {
        const result = await UserData.findAll();
        res.status(200).json(result);
    } catch (err) { next(err) }
})

router.get("/roles",async(req,res,next)=> {
    try {
        const result = await UserData.findRoles();
        res.status(200).json(result); 
    } catch (err) {next(err)}
})

router.post("/user", restrict, onlyUser, checkUsernameExists, async (req, res, next) => {
    try {
        const { user_username, user_password } = req.body;
        if (bcrypt.compareSync(user_password, req.user.user_password)) {
            const result = await UserData.findByFilter({ user_username: req.body.user_username });
            res.status(200).json(result);
        } else {
            next({ status: 403, message: "Invalid credentials" })
        }
    } catch (err) { next(err) }
})



module.exports = router;