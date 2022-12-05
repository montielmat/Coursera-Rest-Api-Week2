const express = require('express')

const leaderRouter = express.Router()

leaderRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaders you!');
    })
    .post((req, res, next) => {
        res.end('Will add the ledear: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /ledears');
    })
    .delete((req, res, next) => {
        res.end('Deleting all ledears');
    });

module.exports = leaderRouter