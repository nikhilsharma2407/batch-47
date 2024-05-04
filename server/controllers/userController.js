const UserModel = require("../models/UserModel");

const login = async (req, res, next) => {
    const { username, password } = req.body;

};
const signup = async (req, res, next) => {
    try {
        const userdata = req.body;
        const data = await UserModel.createUser(userdata);
        if (data) {
            res.status(201);
            res.send({ success: true, message: "user account created successfully!!!" })
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { login, signup };
