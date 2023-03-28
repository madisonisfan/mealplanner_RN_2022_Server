const express = require("express");
const usersRouter = express.Router();
const User = require("../models/user");

usersRouter
  .route("/")
  .get((req, res, next) => {
    User.find()
      .then((users) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(users); //will send json data in the response stream, and will automatically close the response stream afterward, so dont need res.end()
      })
      .catch((err) => next(err)); //passes of the error to the overal error handler for the expresss app, and let express decide how to handle the error, bc it has it built in already
  })
  .post((req, res, next) => {
    //through this create method, mogoose will automaticlaly handle checking that data to make sure it fits the schema that we define

    User.create(req.body) //the express.json() middlware will already have parsed it, into a format we can work with.

      .then((user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
      .catch((err) => {
        console.log(`error`, err);
        next(err);
      });
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /users");
  })
  .delete((req, res, next) => {
    User.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

usersRouter
  .route("/:userId")
  .get((req, res, next) => {
    User.findById(req.params.userId)
      .then((user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /recipes/${req.params.recipeId}`);
  })
  .put((req, res, next) => {
    User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: req.body,
      },
      {
        new: true, //allows us to get info about the update document
      }
    )
      .then((user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    User.findByIdAndDelete(req.params.userId)
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

module.exports = usersRouter;
