const express = require('express');
const debug = require('debug')('app'); // Add a namespace for debugging
const path = require('path');

const app = express();
const port = 4500;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello Phakaphol');
});

app.listen(port, () => {
    debug(`Server is running on port ${port}`);
});
