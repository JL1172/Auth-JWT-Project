const db = require("../../data/db-config");
const UserData = require("../users/user-model");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../../secrets")


async function checkUsername(req, res, next) {
    try {
        if (Object.keys(req.body).length !== 3) {
            next({ status: 422, message: "need username, password, and role name" })
        }
        const { user_username } = req.body;
        const [result] = await db("users").where("user_username", user_username);
        if (!result) {
            next();
        } else {
            next({ status: 422, message: "Invalid username" })
        }
    } catch (err) { next(err) }
}



async function checkPassword(req, res, next) {
    try {
        const { user_password } = req.body;
        if (typeof user_password !== "string") {
            next({ status: 422, message: "Password must be a string" })
        }
        if (user_password.length < 5) {
            next({ status: 422, message: "Password must be longer than 5 chars" })
        } else {
            next();
        }
    } catch (err) { next(err) }
}


async function checkRole(req, res, next) {
    try {
        const [result] = await db("roles").where("role_name", req.body.role_name);
        const trimmed = req.body.role_name.trim();
        if (trimmed === "admin") {
            next({ status: 401, message: "Cannot be admin" })
        }
        if (!result) {
            const newRole=req.body.role_name
            const [addedRole] = await db("roles").insert({role_name : req.body.role_name})
            req.roleId = addedRole; 
            next();
        } else {
            req.roleId = result.role_id;
            next();
        }
    } catch (err) { next(err) }
}

async function checkUsernameExists(req,res,next) {
    try {
        const {user_username, user_password} = req.body;
        if (!user_password || !user_username) {
            next({status : 400, message : "username and password required"})
        } 
        const result = await db("users").where("user_username",user_username).first();
        if (!result) {
            next({status : 403, message : "Invalid credentials"})
        } else {
            req.user = result; 
            next(); 
        }
    } catch (err) {
        next(err)
    }
}


async function restrict(req,res,next) {
    try {
        const token = req.headers.authorization;

        if (!token) {
            next({status : 401, message : "Invalid key"})
        } else {
            jwt.verify(token,JWT_SECRET,(err,decodedToken)=> {
                if (err) {
                    next({status : 401, message : "Invalid Token"})
                } else {
                    req.decodedJwt = decodedToken;
                    next();
                }
            })
        }
    } catch (err)  {
        next(err)
    }
}

const only = role => async(req,res,next) => {
    try {
        if (req.decodedJwt.role_name === role) {
            next();
        } else {
            next({status : 401, message : "Unauthorized"})
        }
    } catch (err) {next(err)}
}

const onlyUser = async(req,res,next) => {
    try {
        if (req.decodedJwt.username === req.body.user_username) {
            next();
        } else {
            next({status : 401, message : "Unauthorized"})
        }
    } catch (err) {next(err)}
}



module.exports = {
    checkUsername,
    checkPassword,
    checkRole,
    checkUsernameExists,
    restrict, 
    only,
    onlyUser
}