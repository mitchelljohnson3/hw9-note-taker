const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// the route is '/' because when we get into this router, the base route '/api/notes' is now just '/'
// reads the db.json file and sends it
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './json/notes.json'));
});

// appends the users notes to db.json
router.post('/', (req, res) => {
    writeJSON(req.body);
    res.end();
});

// deletes the note from db.json with the given id
router.delete('/:id', (req, res) => {
    let url = req.url;
    let id = url.slice(1);
    deleteJSON(id);
    res.end();
});

function writeJSON(newData) {
    // neatly formats data and overwrites the notes.json file with it
    // data comes in as an object

    fs.readFile('./json/notes.json', (err, data) => {
        if (err) throw err;

        let oldData = JSON.parse(data);
        const id = oldData.length;
        newData.id = id;
        oldData.push(newData);
        const newJSON = JSON.stringify(oldData, null, 2);

        fs.writeFile('./json/notes.json', newJSON, (err) => {
            if (err) throw err;
        });
    });
}

function deleteJSON(id) {
    // deletes the note object in the notes.json array at the specified id
    fs.readFile('./json/notes.json', (err, data) => {
        if (err) throw err;

        let oldData = JSON.parse(data);
        oldData.splice(id,1);
        const newJSON = JSON.stringify(oldData, null, 2);

        fs.writeFile('./json/notes.json', newJSON, (err) => {
            if (err) throw err;
            IDreset();
        });
    });
}

function IDreset() {
    // resets the ids of the note objects in the notes.json file after a note has been deleted to keep the ids consistant
    fs.readFile('./json/notes.json', (err, data) => {
        if (err) throw err;

        let oldData = JSON.parse(data);
        for(note of oldData) {
            note.id = oldData.indexOf(note);
        }
        const newJSON = JSON.stringify(oldData);

        fs.writeFile('./json/notes.json', newJSON, (err) => {
            if (err) throw err;
        });
    });
}

module.exports = router;