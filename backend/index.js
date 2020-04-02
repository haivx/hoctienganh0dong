const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hoctienganh0dong', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Could not connect to MongoDB...', error));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => console.log('Lisening on port 30000'))``