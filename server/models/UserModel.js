const { Schema, model, Types: { Decimal128 } } = require("mongoose");
const { errorCreator } = require("../utils/responseHandler");

const formattedUserData = (userdata) => {
    const { _id, __v, secret, password, ...data } = userdata?.toObject();
    return data
}

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
    secret: {
        type: String,
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
        type: Decimal128,
        set: (value) => new Decimal128(value.toFixed(2)),
        get: (value) => parseFloat(value),
        default: 0
    },
    totalCount: {
        type: Number,
        default: 0
    },
}, {
    toObject: {
        getters: true,
    }
});

userSchema.statics.createUser = async (userdata) => {
    const data = await UserModel.create(userdata);
    console.log("🚀 ~ userSchema.statics.createUser= ~ data:", data)
    return data;
};

userSchema.statics.findUser = async (username) => {
    const user = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();
    if (user) {
        return user;
    }
    const err = new Error("user doesn't exists");
    err.status = 404;
    throw err;
}

userSchema.statics.getCart = async (username) => {
    const { cart, totalValue, totalCount } = await UserModel.findUser(username);
    console.log("🚀 ~ userSchema.statics.getCart= ~ cart, totalValue, totalCount:", cart, totalValue, totalCount)
    return { cart, totalValue, totalCount };
}

userSchema.statics.addToCart = async (username, product) => {
    const data = (await UserModel.findOneAndUpdate({ username }, {
        $push: { cart: { ...product, quantity: 1 } },
        $inc: { totalCount: 1, totalValue: product.price }
    }, { new: true }))
    return formattedUserData(data)
}

userSchema.statics.removeFromCart = async (username, product) => {
    const data = (await UserModel.findOneAndUpdate({ username }, {
        $pull: { cart: { id: product.id } },
        $inc: { totalCount: -product.quantity, totalValue: -product.price * product.quantity }
    }, { new: true }))
    return formattedUserData(data)
};

userSchema.statics.increment = async (username, product, increment = true) => {
    const factor = increment ? 1 : -1
    const data = await UserModel.findOneAndUpdate({ username, "cart.id": product.id }, {
        $inc: {
            totalCount: factor,
            totalValue: factor * product.price,
            "cart.$.quantity": factor,
        },
    }, { new: true });

    const userData = formattedUserData(data);
    if (!increment && userData.cart.some(({ quantity }) => quantity === 0)) {
        const removeZeroQty = await UserModel.findOneAndUpdate({ username }, {
            $pull: { cart: { quantity: 0 } }
        }, { new: true });
        return formattedUserData(removeZeroQty)
    };
    return userData;
};

userSchema.statics.clearCart = async (username) => {
    const data = await UserModel.findOneAndUpdate({ username }, {
        $set: {
            cart: [],
            totalCount: 0,
            totalValue: 0
        }
    }, { new: true });
    return formattedUserData(data);
};

userSchema.statics.checkout = async (username) => {
    const orderId = Math.random() * 100000;
    const { cart, totalCount, totalValue } = await UserModel.getCart(username)
    const order = {
        orderId,
        items: cart,
        totalCount,
        totalValue
    };

    const data = await UserModel.updateOne({ username }, {
        $push: { orders: order }
    });
    if (data.modifiedCount) {
        return { orderId, totalCount }
    }
};

userSchema.statics.updatePassword = async (username, password) => {
    const updatedData = await UserModel.updateOne({ username }, {
        $set: { password }
    });
    if (updatedData.modifiedCount) {
        return "Password reset successfully"
    }
};

const UserModel = model("users", userSchema);

module.exports = UserModel;