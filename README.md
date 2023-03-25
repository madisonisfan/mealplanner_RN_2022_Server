# Meal Planner Server - 2022

I am in the process of building a meal planner mobile app with React Native. 
I created this Rest API server to respond to front-end app requests.  [View the repository here](https://github.com/madisonisfan/mealplanner-RN-2022)

Mongoose Methods used: find, create, deleteMany, findById, findByIdAndUpdate, findByIdAndDelete

## Routers: 
* Recipe Router: This is the only router I have created. 
  * Depending on the request, it will make a call to the MongoDB server
  * GET: Uses the find method to retrieve all recipes from the MongoDB database
  * POST: Uses the create method to add a recipe to the database. Mongoose is used to enforce a Schema on the data submitted.
  * PUT: Not available
  * DELETE: Uses the deleteMany method to delete all recipes in the database
  
* Recipe Router + recipeID: 
  * GET: uses the findById method to retrieve the specific recipe from the database
  * POST: not available
  * PUT: uses the findByIdAndUpdate method to edit one or more properties from the given recipe
  * DELETE: uses the findByIdAndDelete to delete the recipe provided


## Technology: 
* Express: I used this Node.js application framework. I used it to scaffold the app
* Mongoose: 
 * Connect method: Used to connect the server to the MongoDB server. It is a wrapper around the MongoDB Node driver connect method. 
 * Provides many methods on the model to alter data in the MongoDB server. 
