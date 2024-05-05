const { compare, genSalt, hash } = require("bcrypt");

const generatePasswordHash = async (password) => {
    const salt = await genSalt();
    const hashedPwd = hash(password, salt);
    return hashedPwd;
}


const verifyPassword = async (password, hash) => {
    const isVerified = await compare(password, hash);
    return isVerified
};

// generatePasswordHash('qwerty123').then(console.log);
// const password = "qwerty123";
// const hashedPwd = "$2b$10$AMU/QEoEVhRT0.yrGO8oMu2InTRizVrr58d22ukB1I6c4w7T4PyqC";

// verifyPassword(password, hashedPwd).then(console.log);
module.exports = { generatePasswordHash, verifyPassword }
