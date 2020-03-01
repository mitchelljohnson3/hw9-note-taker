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
    deleteData(req.url.id);
});

function postData(data) {
    // read existing data in the notes.json
    // convert it into an array
    // get the length of the array
    // use the arrays length as the id of the incoming note
    // add the incoming note to the previous array
    // convert the array back into json
    // neatly overwrite the notes.json with the newly updated json data


}

function deleteData(id) {
    // read existing data in the notes.json
    // convert it into an array
    // get the length of the array
    // delete the value of the array at the index ( id - 1 )
    // convert array back into json
    // overwrite notes.json with new json data
    
}

function writeToFile(data) {
    // neatly formats data and overwrites the notes.json file with it

}

module.exports = router;