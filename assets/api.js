const express = require('express');
const router = express.Router();
const fs = require('fs');

// the route is '/' because when we get into this router, the base route '/api/notes' is now just '/'
// reads the db.json file and sends it
router.get('/', (req, res) => {
    res.send('Test route!');
});

// appends the users notes to db.json
router.post('/', (req, res) => {
    res.send('Test route!');
});

// deletes the note from db.json with the given id
router.post('/:id', (req, res) => {
    res.send('Test route!');
});

module.exports = router;