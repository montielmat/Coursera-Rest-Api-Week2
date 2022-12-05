const express = require('express')

const promoRouter = express.Router()

promoRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promo to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotion');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });
module.exports = promoRouter