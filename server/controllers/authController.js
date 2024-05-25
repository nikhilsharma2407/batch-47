const UserModel = require("../models/UserModel");
const { verifyToken } = require("../utils/jwtUtil");

const authController = async (req, res, next) => {
    try {
        const { token = null } = req.cookies;
        console.log("🚀 ~ authController ~ req.cookies:", req.cookies)
        console.log("🚀 ~ authController ~ token:", token)
        const { username } = verifyToken(token);
        const { password, secret ,id, ...userData } = await UserModel.findUser(username);
        // res.locals -> placeholder
        res.locals.user = userData;
        next();
    } catch (error) {
        next(error);
    }
};


module.exports = { authController }