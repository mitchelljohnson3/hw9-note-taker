const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// the route is '/' because when we get into this router, the base route '/api/notes' is now just '/'
// reads the db.json file and sends it
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/notes.json'))
});

// appends the users notes to db.json
router.post('/', (req, res) => {
    postData(req.body);
});

// deletes the note from db.json with the given id
router.delete('/:id', (req, res) => {
    res.send('Test route!');
});

function writeToFile(data) {
    fs.writeFile('./json/notes.json', JSON.stringify(data), (err) => {
        if (err) throw err;
    });
}

function postData(data) {
    fs.readFile('./json/notes.json', 'utf8', (err, data) => {
        if (err) throw err;
        let oldNotes = {
            "length": JSON.parse(data).length,
            "content": JSON.parse(data)
        }

        let oldNote = oldNotes.content;

        let note = data;
        console.log(note)
        note.id = oldNotes.length;
        oldNote.push(note);
        writeToFile(oldNote);
    });
}

module.exports = router;