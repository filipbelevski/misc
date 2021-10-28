const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
    const user = req.body;

    //user.save();

    res.status(201).send(user);
});

router.post('/users/login', (req, res) => {
    const user = req.body;
    const foundUser = db.findUser(user);

    // user.validate();

    res.status(200).send("token");
})

router.post('/users/logout', (req, res)=> {
    const user = req.body;
    delete user.token;

    user.save();
})

router.get('/users/me', (req, res) => {
    const user = db.find(req.body);
    res.status(200).send(user)
})