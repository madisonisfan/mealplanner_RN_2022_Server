# Meal Planner Server - 2022

I am in the process of building a meal planner mobile app with React Native. 
I created this Rest API server to respond to requests from the front end app. 

Mongoose Methods used: find, create, deleteMany, findById, findByIdAndUpdate, findByIdAndDelete

## Routers: 
* Recipe Router: This is the only router I have created so far. 
  * Depending on the request it will make a call to the MongoDB server
  * GET: Using the find method, it will retrieve all recipes from the MongoDB database
  * POST: Using the create method, it adds a recipe to the database. Mongoose is used to enforce a Schema on the data submitted.
  * PUT: Not available
  * DELETE: Using the deleteMany method it will delete all recipes in the database
  
* Recipe Router + recipeID: 
  * GET: uses the findById method to retreive the specific recipe from the database
  * POST: not available
  * PUT: using the findByIdAndUpdate method, it edits a property from the given recipe
  * DELETE: using the findByIdAndDelete, it deletes the recipe provided


## Technology: 
* Express: The Node.js application framework is used. I used it to scaffold out the app
* Mongoose: 
 * Connect method: Used to connect the server to the MongoDB server. It is wrapper around the MongoDB Node driver connect method. 
 * Provides many methods on the model to alter data in the MongoDB server. 
* Morghan: 
