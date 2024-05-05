const responseCreator = (message, data) => {
    // res.status(status);
    // res.send({ success: true, message });
    return { success: true, message, data }
};

const errorCreator = (message, status = 500) => {
    const err = new Error(message);
    err.status = status;
    throw err;
};

module.exports = { responseCreator, errorCreator }