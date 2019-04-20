
const validateTypeofKey = function (key, newValue, type) {
  if (typeof newValue !== type) {
    throw new Error(`${key} has to be ${type}`);
  }
}

/** Returns true for a valid recipe key-value pair, throws exception otherwise */
const validateRecipeKey = function (key, newValue) {
  switch (key) {
    case "title":
    case "instructions":
      validateTypeofKey(key, newValue, "string");
      break;
    case "total_calories":
    case "calories_per_portion":
    case "number_of_portions":
    case "id":
      validateTypeofKey(key, newValue, "number");
      break;
    case "ingredients":
      if (!(Array.isArray(newValue))) {
        throw new Error("ingredients has to be Array");
      }
      if (!(newValue.every((el) => typeof el === "string"))) {
        throw new Error("every ingredient has to be string")
      }
      break;
    default:
      return false;
  }
  return true;
};

/** Returns true for a valid recipe object, throws exception otherwise */
const validateRecipe = function (recipe) {
  let result = false;
  for (const key in recipe) {
    result = true;
    if (recipe.hasOwnProperty(key) && !(validateRecipeKey(key, recipe[key]))) {
      return false;
    }
  }
  return result;
};

module.exports = {
  validateRecipeKey: validateRecipeKey,
  validateRecipe: validateRecipe
}
