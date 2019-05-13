const uuidv1 = require('uuid/v1')

const {
  validateRecipeKey,
  validateRecipe,
  isValidKey
} = require('../js/validation')

window.db = {
  recipes: [{
    'id': 1,
    'title': 'Spaghetti Carbonara',
    'ingredients': [
      '200g pancetta or thick cut bacon, diced',
      '4 yolks'
    ],
    'instructions': '1 Heat pasta water. Prepare rest of ingredients. Voila.',
    'totalCalories': 2600,
    'numberOfPortions': 4,
    'caloriesPerPortion': 650
  },
  {
    'id': 2,
    'title': 'Toast',
    'ingredients': [
      'bread',
      'cheese'
    ],
    'instructions': 'Put cheese beetwen bread slices. Put in the toaster. Voila',
    'totalCalories': 800,
    'numberOfPortions': 2,
    'caloriesPerPortion': 400
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
  }

  const numberOfPortions = recipe.numberOfPortions
  const totalCalories = recipe.totalCalories
  // prevent division by zero and provide sane default:
  let caloriesPerPortion
  if (numberOfPortions >= 0) {
    caloriesPerPortion = totalCalories / numberOfPortions
  } else {
    caloriesPerPortion = 0
  }

  const newRecipeId = uuidv1()
  const myRecipe = {
    id: newRecipeId,
    title: recipe.title,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    totalCalories: recipe.totalCalories,
    numberOfPortions: recipe.numberOfPortions,
    caloriesPerPortion: caloriesPerPortion
  }
  window.db.recipes.push(myRecipe)

  return newRecipeId
}

/** Updates recipe in the database.  */
const updateRecipe = function (id, key, newValue) {
  if (!validateRecipeKey(key, newValue) && !isValidKey(key)) {
    throw new Error("Your key doesn't exist")
  }

  const doesIdExist = window.db.recipes.find(function (el) {
    return el.id === id
  })

  if (!doesIdExist) {
    throw new Error("Your id doesn't exist")
  }

  switch (key) {
    case 'id':
      throw new Error("You can't update id!")
    case 'caloriesPerPortion':
      throw new Error("You can't update caloriesPerPortion!")
  }

  const recipeIndex = window.db.recipes.findIndex(obj => {
    return obj.id === id
  })
  window.db.recipes[recipeIndex][key] = newValue
}

/** Deletes recipe from database. */

const deleteRecipe = function (id) {
  const recipeIndex = window.db.recipes.findIndex(obj => {
    return obj.id === id
  })
  window.db.recipes.splice(recipeIndex, 1)
}

module.exports = {
  getRecipes: getRecipes,
  getRecipe: getRecipe,
  createRecipe: createRecipe,
  updateRecipe: updateRecipe,
  deleteRecipe: deleteRecipe
}
