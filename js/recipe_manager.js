const {
  validateRecipeKey,
  validateRecipe,
  isValidKey
} = require('../js/validation')

const uuidv1 = require('uuid/v1')

window.db = {
  recipes: [{
    'id': 1,
    'title': 'Spaghetti Carbonara',
    'ingredients': [
      '200g pancetta or thick cut bacon, diced',
      '4 yolks'
    ],
    'instructions': '1 Heat pasta water. Prepare rest of ingredients. Voila.',
    'total_calories': 2600,
    'number_of_portions': 4,
    'calories_per_portion': 650
  },
  {
    'id': 2,
    'title': 'Toast',
    'ingredients': [
      'bread',
      'cheese'
    ],
    'instructions': 'Put cheese beetwen bread slices. Put in the toaster. Voila',
    'total_calories': 800,
    'number_of_portions': 2,
    'calories_per_portion': 400
  }
  ]
}

// ----------------- API -------------------

// CRUD

/** Returns all recipes in the database */
const getRecipes = function () {
  return window.db.recipes
}

/** Returns recipe with the given id */
const getRecipe = function (id) {
  return window.db.recipes.find(function (el) {
    return el.id === id
  })
}

/** Adds new recipe to the database. Returns the new recipe's ID */
const createRecipe = function (recipe) {
  if (!validateRecipe(recipe)) {
    return false
  };

  const numOfPort = recipe.number_of_portions
  const totalCal = recipe.total_calories
  const caloriesPerPortion = totalCal / numOfPort
  const newId = uuidv1()
  const myRecipe = {
    id: newId,
    title: recipe.title,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    total_calories: recipe.total_calories,
    number_of_portions: recipe.number_of_portions,
    calories_per_portion: caloriesPerPortion
  }
  window.db.recipes.push(myRecipe)

  return newId
}

/** Updates recipe in the database.  */
const updateRecipe = function (id, key, newValue) {
  if (!validateRecipeKey(key, newValue)) {
    if (!isValidKey(key)) {
      throw new Error("Your key doesn't exist")
    } else {
      return false
    }
  };

  const doesIdExist = window.db.recipes.find(function (el) {
    return el.id === id
  })

  if (!doesIdExist) {
    throw new Error("Your id doesn't exist")
  }

  switch (key) {
    case 'id':
      throw new Error("You can't update id!")
    case 'calories_per_portion':
      throw new Error("You can't update calories_per_portion!")
  }

  const recipeIndex = window.db.recipes.findIndex(obj => {
    return obj.id === id
  })
  window.db.recipes[recipeIndex][key] = newValue
}

/** */

const deleteRecipe = function (id) {
  const recipeIndex = window.db.recipes.findIndex(obj => {
    return obj.id === id
  })
  window.db.recipes.splice(recipeIndex, 1)
  // TODO: delete recipe
}

module.exports = {
  getRecipes: getRecipes,
  getRecipe: getRecipe,
  createRecipe: createRecipe,
  updateRecipe: updateRecipe,
  deleteRecipe: deleteRecipe
}
