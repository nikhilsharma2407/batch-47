const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "username is mandatory"],
    },
    name: {
        type: String,
        required: [true, "name is mandatory"],
    },
    password: {
        type: String,
        required: [true, "password is mandatory"],
    },

    cart: {
        type: [Object],
        default: []
    },
    orders: {
        type: [Object],
        default: []
    },
    totalValue: {
        type: Number,
        default: 0
    },
    totalCount: {
        type: Number,
        default: 0
    },
});

userSchema.statics.createUser = async (userdata) => {
    const data = await UserModel.create(userdata);
    console.log("🚀 ~ userSchema.statics.createUser= ~ data:", data)
    return data;
}
userSchema.statics.findUser = async (username) => {
    const user = (await UserModel.findOne({ username },{_id:0,__v:0}))?.toObject();
    if(user){
        return user;
    }
    const err = new Error("user doesn't exists");
    err.status = 404;
    throw err;

}

const UserModel = model("users", userSchema);

module.exports = UserModel;