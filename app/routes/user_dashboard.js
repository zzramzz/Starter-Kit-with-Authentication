const {User} = require('../models/user_model');
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/me',auth, async (req,res) => {
    const user = await User.findById(req.user._id).select('-password');

    // const token = req.header('x-auth-token');
    // res.status(401)

    res.send(user);
})
module.exports = router;