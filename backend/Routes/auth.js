const router = require('express').Router();
const Users = require('../Models/Users');

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verifyToken = require('./verifyToken');


//Register.
router.post('/register', async (req,res)=>{
    
    try{
        const newUser = await Users.create({
            username : req.body.username,
            email : req.body.email,
            password : CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
            ).toString(),
        });
        
        const savedUser = await newUser.save();
        res.json(savedUser);
    }
    catch(err){
        res.json(err);
    }

});

//Login.
router.post('/login',async (req,res)=>{

    try{
        const user = await Users.findOne({email:req.body.email});

        !user && res.json("User Not Found");

        const originalPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        ).toString(CryptoJS.enc.Utf8);

        originalPassword != req.body.password && res.json("Wrong credentials");

        const accessToken = jwt.sign(
            {
                user,
            },
            process.env.JWT_SEC,
            );
      
            const { password, ...others } = user._doc;  
            res.status(200).json({...others, accessToken});

    }
    catch(err){
        res.json(err);
    }

})

//Load User.
router.get('/loadUser',verifyToken,(req,res)=>{
    const user = req.user;
    return res.json(user);
})


module.exports = router;
