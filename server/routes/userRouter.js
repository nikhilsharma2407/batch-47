const express = require("express");
const { login, signup, loginWithCookie, resetPassword, logout } = require("../controllers/userController");
const { authController } = require("../controllers/authController");
const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.patch('/resetPassword', resetPassword);

// login with Cookie
userRouter.get('/login', authController, loginWithCookie)
userRouter.get('/logout',logout)

module.exports = userRouter;
