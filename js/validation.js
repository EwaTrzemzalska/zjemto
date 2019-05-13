
const validateTypeOfKey = function (key, value, type) {
  if (typeof value !== type) {
    throw new Error(`${key} has to be of type ${type}`)
  }
}

const allKeys = ['id', 'title', 'ingredients', 'instructions', 'totalCalories', 'numberOfPortions', 'caloriesPerPortion']
const isValidKey = function (key) {
  return allKeys.includes(key)
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
      return false
  }
  return true
}

/** Returns true for a valid recipe object, throws exception otherwise */
const validateRecipe = function (recipe) {
  /* when recipe is empty the for loop will not run. We use result to return
  false instead of undefined
  // when recipe is not empty result will be set to true and when all keys
  will pass validation, the whole recipe is valid
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

module.exports = {
  validateRecipeKey: validateRecipeKey,
  validateRecipe: validateRecipe,
  isValidKey: isValidKey
}
