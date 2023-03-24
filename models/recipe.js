const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    cooktime: {
      type: Number,
      required: true,
    },
    preptime: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ingredientSchema = new Schema({
  ingredientName: {
    type: String,
    required: true,
  },
  wholeValue: {
    type: String,
  },
  fractionValue: {
    type: String,
  },
  unit: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
