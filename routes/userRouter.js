const express = require('express');
const router = express.Router();
const AnimalModel = require('../models/animalModel')

router.post('/adoption', async (req, res) => {
    try {
        await AnimalModel.create(req.body);
        res.json({message: `${req.body.email} successfully submitted adoption request!`})
    } catch (error) {
        console.error(error.message || error);
        res.status(500).json({message: error.message});
    }
})

module.exports = router;