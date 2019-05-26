const PORT = '3000';
const express = require('express');
const cors = require('cors')
const listPhimRoute = require('./route/listPhim');
const userRoute = require('./route/user');
const detailPhimRoute = require('./route/detailPhim');
const phongveRoute = require('./route/phongve');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors())

// middelware request
app.use('/', listPhimRoute);
app.use('/user', userRoute);
app.use('/detail', detailPhimRoute);
// app.use('/room', phongveRoute);


// Handeler for 404
app.use((req, res, next) => {
    res.status(404).send('page not found');
})
// Handler for 505
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.send('505 server');
})

app.listen(PORT);