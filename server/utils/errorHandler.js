module.exports = async (err, req, res, next) => {
    console.log("🚀 ~ errHandler:", err);
    if (err.code === 11000) {
        err.message = "username already exists!!!"
        err.status = 403;
    } else if (err.name === "TokenExpiredError"){
        err.message = "Session expired, please login again to continue!!!";
        err.status = 401;
    }

     
    res.status(err.status || 500);
    res.send({ success: false, message: err.message })
}
