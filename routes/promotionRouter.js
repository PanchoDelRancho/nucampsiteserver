const express = require("express");
const promotionRouter = express.Router();


promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`${req.body.name}, ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end("deleting all promotions");

  });



  promotionRouter
  .route('/:promotionId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send the promotion " + req.params.promotionId);
  })
  .post((req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`${req.body.name}, ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end("deleting promotion " + req.params.promotionId);

  });

module.exports = promotionRouter;