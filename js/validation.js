
<<<<<<< HEAD
const validateTypeOfKey = function (key, value, type) {
  if (typeof value !== type) {
    throw new Error(`${key} has to be ${type}`)
=======
const validateTypeofKey = function (key, newValue, type) {
  if (typeof newValue !== type) {
    throw new Error(`${key} has to be a ${type}`)
>>>>>>> bb9d77ba7fb10a5e3c1d6e09c4149947e5d399c8
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
        throw new Error('ingredients has to be Array')
      }
      if (!value.every((el) => typeof el === 'string')) {
        throw new Error('every ingredient has to be string')
      }
      break
    default:
      return false
  }
  return true
}

/** Returns true for a valid recipe object, throws exception otherwise */
const validateRecipe = function (recipe) {
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
