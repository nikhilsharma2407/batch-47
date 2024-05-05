const UserModel = require("../models/UserModel");
const { generateToken } = require("../utils/jwtUtil");
const { generatePasswordHash, verifyPassword } = require("../utils/passwordUtil");
const { errorCreator, responseCreator } = require("../utils/responseHandler");

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { password: pwdHash, ...userData } = await UserModel.findUser(username);
        const isValid = await verifyPassword(password, pwdHash);
        if (isValid) {
            const token = generateToken(userData, "10s");
            res.cookie('token', token, { maxAge: 3600_000, httpOnly: true });
            res.send(responseCreator("User logged in successfully", userData));
        } else {
            errorCreator("Incorrect password", 404);
        }
    } catch (error) {
        next(error)
    }
};

const signup = async (req, res, next) => {
    try {
        const { password, ...userdata } = req.body;
        const pwdHash = await generatePasswordHash(password);
        userdata.password = pwdHash;
        const data = await UserModel.createUser(userdata);
        if (data) {
            res.status(201);
            res.send({ success: true, message: "user account created successfully!!!" })
        }
    } catch (error) {
        next(error);
    }
};

const loginWithCookie = async (req, res, next) => {
    try {
        const userData = res.locals.user;
        console.log("🚀 ~ loginWithCookie ~ userData:", userData)
        res.send(responseCreator("Logged in via Cookie", userData));
    } catch (error) {
        next(error)
    }

}

module.exports = { login, signup, loginWithCookie };
