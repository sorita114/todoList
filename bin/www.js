const express = require('express');
const path = require('path');
const app = express();

const index = require('../routers/index');
const examples = require('../routers/examples');

app.use('/static', express.static(path.join(__dirname, '../node_modules')));
app.use('/css', express.static(path.join(__dirname, '../app/assets/styles')));
app.use('/js', express.static(path.join(__dirname, '../app/assets/js')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/images', express.static(path.join(__dirname, '../app/assets/images')));
app.use('/components', express.static(path.join(__dirname, '../app/components')));

app.use('/', index);
app.use('/examples', examples);

app.listen(3000, () => console.log('Example app listening on port "3000"'));