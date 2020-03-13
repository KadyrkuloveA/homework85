const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const config = require('../config');

const Artist = require('../models/Artist');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const items = await Artist.find();
    res.send(items);
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Artist.findById(req.params.id);

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(item);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});

router.post('/', upload.single('image'), async (req, res) => {
    const artistData = req.body;

    if (req.file) {
        artistData.image = req.file.filename;
    }

    const artist = new Artist(artistData);

    try {
        await artist.save();

        return res.send({id: artist._id});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;