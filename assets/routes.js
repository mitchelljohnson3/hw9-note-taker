const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.urlencoded({ extended: true}));
router.use(express.json());

// sends api calls to the api handler
router.use('/api/notes', require('./api.js'))

// will send the notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/notes.html'));
});

// will send the index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

module.exports = router;