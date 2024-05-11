const express = require("express");
const { getCartItems, addToCart, increment, decrement, clearCart, removeFromCart } = require("../controllers/cartController");
const { authController } = require("../controllers/authController");
const cartRouter = express.Router();

cartRouter.get('/getCart', authController, getCartItems);
cartRouter.post('/addToCart', authController, addToCart);
cartRouter.post('/removeFromCart', authController, removeFromCart);
cartRouter.patch('/increment', authController, increment);
cartRouter.patch('/decrement', authController, decrement);
cartRouter.put('/clear', authController, clearCart);

module.exports = cartRouter;
