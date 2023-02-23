const express = require('express')
const partnerRouter = express.Router()


partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the prartner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`${req.body.name}, ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end("deleting all partners");

  });



  partnerRouter
  .route('/:partnerId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send the partner " + req.params.partnerId);
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`${req.body.name}, ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end("deleting partner " + req.params.partnerId);

  });

module.exports = partnerRouter;