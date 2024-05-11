const express = require("express");
const router = express.Router();

// "/" ->  http://localhost:4000/router/

router.get('/', (req, res) => {
    console.log("🚀 ~ router.get ~ req.path:", req.path)
    console.log("🚀 ~ router.get ~ req.params:", req.params)
    console.log("🚀 ~ router.get ~ req.query:", req.query)

    res.send({ success: true, message: 'Successful response from router',  });
});
router.get('/totp', (req, res) => {

    res.send(`<img src="data:image/png;base64,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" height="200px" width="200px"/>`);
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