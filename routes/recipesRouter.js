const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipe");

recipeRouter
  .route("/")
  .get((req, res, next) => {
    Recipe.find()
      .then((recipes) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(recipes); //will send json data in the response stream, and will automatically close the response stream afterward, so dont need res.end()
      })
      .catch((err) => next(err)); //passes of the error to the overal error handler for the expresss app, and let express decide how to handle the error, bc it has it built in already
  })
  .post((req, res, next) => {
    //through this create method, mogoose will automaticlaly handle checking that data to make sure it fits the schema that we define
    Recipe.create(req.body) //the express.json() middlware will already have parsed it, into a format we can work with.
      .then((recipe) => {
        console.log(`recipe created`, recipe);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(recipe);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /recipes");
  })
  .delete((req, res, next) => {
    Recipe.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

recipeRouter
  .route("/:recipeId")

  .get((req, res, next) => {
    Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(recipe);
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /recipes/${req.params.recipeId}`);
  })
  .put((req, res, next) => {
    Recipe.findByIdAndUpdate(
      req.params.recipeId,
      {
        $set: req.body,
      },
      {
        new: true, //allows us to get info about the update document
      }
    )
      .then((recipe) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(recipe);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Recipe.findByIdAndDelete(req.params.recipeId)
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

module.exports = recipeRouter;
