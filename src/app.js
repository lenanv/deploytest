const http = require('http');
const express = require('express');
const views = require('./routes/views');

const app = express();

app.use('/', views);
app.use('/static', express.static('public'));

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status | 500);
    res.send({
        status: err.status,
        message: err.message,
    })
});

<<<<<<< HEAD
const port = (process.env.PORT||3000);
=======
const port = (process.env.PORT || 3000);
>>>>>>> f15e632b2790a10631edbfd9d97eab4d39952540
server = http.Server(app);
server.listen(port, function () {
    console.log('server listening on port ' + port);
});
