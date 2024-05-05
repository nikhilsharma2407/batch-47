const { sign, verify } = require("jsonwebtoken");
const { errorCreator } = require("./responseHandler");

const SECRET_KEY = "MY_SECRET_KEY";

const generateToken = (userData, time = '1h') => {
    const { username } = userData;
    const token = sign({ username }, SECRET_KEY, { expiresIn: time });
    console.log("🚀 ~ generateToken ~ token:", token);
    return token;
}

const verifyToken = (token) => {
    if (!token) {
        errorCreator("Token missing, Please login to continue!!!", 401);
    }
    return  verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
