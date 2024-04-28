const express = require("express");
const router = express.Router();

// "/" ->  http://localhost:4000/router/

router.get('/', (req, res) => {
    console.log("🚀 ~ router.get ~ req.path:", req.path)
    console.log("🚀 ~ router.get ~ req.params:", req.params)
    console.log("🚀 ~ router.get ~ req.query:", req.query)

    res.send({ success: true, message: 'Successful response from router' });
});

// http://localhost:4000/router/user/123?search=abcd&country=IN&currency=INR
router.get('/user/:id', (req, res) => {

    console.log("🚀 ~ router.get ~ /user/:id")
    console.log("🚀 ~ router.get ~ req.path:", req.path)
    console.log("🚀 ~ router.get ~ req.params:", req.params)
    console.log("🚀 ~ router.get ~ req.query:", req.query)
    res.send({ success: true, message: 'Successful response from user route handler' });
});

router.post('/signup', (req, res) => {
    console.log("🚀 ~ router.post ~ /signup:")
    console.log("🚀 ~ router.post ~ req.path:", req.path)
    console.log("🚀 ~ router.post ~ req.body:", req.body);
    const { username } = req.body
    
    res.status(401);
    res.send({ success: true, message: `user created successfully - ${username  }` });
});

// Wildcard route, should always be present at the end;
router.all('*',(req,res)=>{
    console.log('Wildcard route');
    res.status(404);
    res.send({success:false, message:"Invalid Route"});
});

module.exports = router