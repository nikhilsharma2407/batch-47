const speakeasy = require("speakeasy");
const QRcode = require("qrcode");

const generateQRcode = async () => {
    const { base32: secret, otpauth_url } = speakeasy.generateSecret({ name: 'GeeksForGeeks' });
    const qrcode = await QRcode.toDataURL(otpauth_url);

    return { secret, qrcode }
}

const verifyOTP = (secret, otp) => {
    const isVerified = speakeasy.totp.verify({
        secret,
        token: otp,
        encoding: "base32"
    });
    return isVerified;
};

module.exports = { generateQRcode, speakeasy }
