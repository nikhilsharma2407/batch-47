const UserModel = require("../models/UserModel");
const { generateToken } = require("../utils/jwtUtil");
const { generatePasswordHash, verifyPassword } = require("../utils/passwordUtil");
const { errorCreator, responseCreator } = require("../utils/responseHandler");
const { generateQRcode, verifyOTP } = require("../utils/totpUtils");

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { secret, password: pwdHash, ...userData } = await UserModel.findUser(username);
        const isValid = await verifyPassword(password, pwdHash);
        if (isValid) {
            const token = generateToken(userData);
            res.cookie('token', token, { maxAge: 3600_000, httpOnly: true });
            res.send(responseCreator("User logged in successfully", userData));
        } else {
            errorCreator("Incorrect password", 401);
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
        const { qrcode, secret } = await generateQRcode(userdata.username);
        console.log("🚀 ~ signup ~ qrcode, secret:", qrcode, secret)
        const data = await UserModel.createUser({ ...userdata, secret });
        if (data) {
            res.status(201);
            res.send(responseCreator("user account created successfully!!!",qrcode))
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

const resetPassword = async (req, res, next) => {
    try {
        const { username, otp, password } = req.body;
        if (!otp) {
            errorCreator('Please Enter OTP', 401);
        }
        const { secret } = await UserModel.findUser(username);
        console.log("🚀 ~ resetPassword ~ secret:", secret)
        const isOTPVerified = verifyOTP(secret, otp);
        if (isOTPVerified) {
            const pwdHash = await generatePasswordHash(password)
            const message = await UserModel.updatePassword(username, pwdHash);
            res.send(responseCreator(message))
        } else {
            errorCreator('Invalid OTP', 401);
        }
    } catch (error) {
        next(error)
    }
}

const logout = async (req,res,next)=>{
    res.clearCookie('token')
    res.send(responseCreator("Logged out!!!",null))
}

module.exports = { login, signup, loginWithCookie, resetPassword, logout };
