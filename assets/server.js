const express = require('express');
const app = express();
// imports route controller
const router = require('./routes.js');
const PORT = 3000;

// use the express router
app.use(router);

// starts server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));