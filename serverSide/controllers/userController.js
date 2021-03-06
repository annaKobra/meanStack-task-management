const express = require('express');
const router = express.Router();
const userBL = require('../models/userUtils');

router.get('/', async function(req, res) {
    let users = await userBL.getAll();
    return res.json(users);
});

router.get('/:id', async function(req, res) {
    try {
        let userId = req.params.id;
        let user = await userBL.getById(userId);
        return res.json(user);
    } catch {
        res.status(404);
		res.send({ error: "User doesn't exist!" })
    }
});

router.post('/', async function(req, res) {
    let newUserData = req.body;
    let userData = await userBL.create(newUserData);
    return res.json(userData);
});

router.put('/:id', async function(req,res) {
    try {
        let userData = req.body;
        let id = req.params.id;
        let updatedData = await userBL.update(id, userData);
        return res.json(updatedData);
    } catch {
        res.status(404);
		res.send({ error: "User doesn't exist!" })
    }
});

router.delete('/:id', async function(req, res) {
    try {
        let userId = req.params.id;
        let deletedUser = await userBL.delete(userId);
        return res.json(deletedUser);
    } catch {
        res.status(404);
		res.send({ error: "User doesn't exist!" })
    }
});

module.exports = router;



