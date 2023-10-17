//express app 
const express = require("express");
//express app 

//routes
const UserRouter = require("./users/user-router");
const AuthRouter = require("./auth/auth-router");
//routes

//middlewares
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors"); 
//middlewares 

//instantiation
const server = express();
//instantiation

//using mw's
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
//using mw's

//using routes
server.use("/api/auth",AuthRouter);
server.use("/api/users",UserRouter)
//using routes

server.get("*",(req,res,next)=> {
    next({status : 404, message : "not found"})
})

server.use((error,req,res,next)=> {
    res.status(error.status || 500).json({
        message : error.message,
        stack : error.stack,
    })
})

module.exports = server;