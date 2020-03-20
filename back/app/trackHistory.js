const express = require('express');
const auth = require('../middleware/auth');

const TrackHistory = require('../models/TrackHistory');

const router = express.Router();

router.post('/', auth, async (req, res) => {
    const historyData = req.body;
    console.log(req.body);
    const user = req.user;
    historyData.user = user._id;

    const history = new TrackHistory(historyData);

    try {
        await history.save();

        return res.send({message: "Successful saved to history"});
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const items = await TrackHistory.find({user: req.user._id}).sort({datetime: 1}).populate( {path : 'track', populate: {path: 'album', populate: {path: 'artist'}}});

        if (!items) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(items);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});

module.exports = router;
