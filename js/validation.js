
const validateTypeOfKey = function (key, value, type) {
  if (typeof value !== type) {
    throw new Error(`${key} has to be of type ${type}`)
  }
}

/** Returns true for a valid recipe key-value pair, throws exception otherwise */
const validateRecipeKey = function (key, value) {

  switch (key) {
    case 'title':
    case 'instructions':
      validateTypeOfKey(key, value, 'string')
      break
    case 'totalCalories':
    case 'caloriesPerPortion':
    case 'numberOfPortions':
    case 'id':
      validateTypeOfKey(key, value, 'number')
      break
    case 'ingredients':
      if (!(Array.isArray(value))) {
        throw new Error('ingredients has to be of type Array')
      }
      if (!value.every((el) => typeof el === 'string')) {
        throw new Error('every ingredient has to be of type string')
      }
      break
    default:
      throw new Error("Your key doesn't exist")
  }
  return true
}

/** Returns true for a valid recipe object, throws exception otherwise */
const validateRecipe = function (recipe) {
  /* When recipe is empty the for loop will not run. We use result to return
  // false instead of undefined. When recipe is not empty result will be set to
  // true and when all keys will pass validation, the whole recipe is valid.
  */
  let result = false
  for (const key in recipe) {
    result = true
    if (recipe.hasOwnProperty(key) && !(validateRecipeKey(key, recipe[key]))) {
      return false
    }
  }
  return result
}

const doesIdExist = function (recipes, id) {
  return recipes.find(function (el) {
    return el.id === id
  })
}

const validateIdExistance = function (recipes, id) {
  if (!doesIdExist(recipes, id)) {
    throw new Error("Your id doesn't exist")
  }
}

module.exports = {
  validateRecipeKey: validateRecipeKey,
  validateRecipe: validateRecipe,
  validateIdExistance: validateIdExistance
}
