const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, '../node_modules')));
app.use('/css', express.static(path.join(__dirname, '../app/assets/styles')));
app.use('/js', express.static(path.join(__dirname, '../app/assets/js')));
app.use('/images', express.static(path.join(__dirname, '../app/assets/images')));
app.use('/app', express.static(path.join(__dirname, '.../app')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname , '../views/index.html')));

app.listen(3000, () => console.log('Example app listening on port "3000"'));