let window.db = {
  recipes: [{
    "id": 1,
    "title": "Spaghetti Carbonara",
    "ingredients": [
      "200g pancetta or thick cut bacon, diced",
      "4 yolks",
    ],
    "instructions": "1 Heat pasta water. Prepare rest of ingredients. Voila.",
    "total_calories": 2600,
    "number_of_portions": 4,
    "calories_per_portion": 650
  },
  { 
    "id": 2,
    "title": "Toast",
    "ingredients": [
      "bread",
      "cheese"
    ],
    "instructions": "Put cheese beetwen bread slices. Put in the toaster. Voila",
    "total_calories": 800,
    "number_of_portions": 2,
    "calories_per_portion": 400
  }
  ],
}


// ----------------- API -------------------

const validateRecipeKey = function(key, newValue) {
  // total_calories must be a number
  // number_of_portions must be a number
};

const validateRecipe = function(recipe) {
  // loop over pairs: key-value, call the function validateRecipeKey() with key, value
};

// CRUD

/** Returns all recipes in the database */
const getRecipes = function() {};

/** Returns recipe with the given id */
const getRecipe = function(id) {};

/** Adds new recipe to the database. Returns the new recipe's ID */
const createRecipe = function(recipe) {
  validateRecipe(recipe);
  const numOfPort = recipe.number_of_portions;
  const totalCal = recipe.total_calories;
 
  // TODO: calculate calories per portion;
  // TODO: generate new ID;
 

  return ID;
};

/** Updates recipe in the database.  */
const updateRecipe = function(id, key, newValue) {
  validateRecipeKey(key, newValue) 

  // TODO: prevent update of calories_per_portion
  // TODO: prevent update of ID
  // TODO: throw an error if ID doesn't exist
  // TODO: throw an error if key doesn't exist in recipe

}

/** */

const deleteRecipe = function(id) {

  // TODO: delete recipe 
}





module.exports = {
  getRecipes: getRecipes
}
