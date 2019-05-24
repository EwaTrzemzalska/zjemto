const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../js/recipe_manager')

const appendRecipeToRecipeList = function (recipe) {
  // creating li
  const li = document.createElement('li')
  const recipeTitle = document.createTextNode(recipe.title)
  li.appendChild(recipeTitle)
  // adding li to recipe list
  const ul = document.getElementById('recipe-list')
  ul.appendChild(li)
}

const displayRecipes = function () {
  const recipes = getRecipes()
  for (let i = 0; i < recipes.length; i++) {
    appendRecipeToRecipeList(recipes[i])
  }
}

displayRecipes()

const appendElementWithText = function (parent, tagName, text) {
  const textNode = document.createTextNode(text)
  const element = document.createElement(tagName)
  element.appendChild(textNode)
  parent.appendChild(element)
}

const createDecriptionList = function (terms, details) {
  const dl = document.createElement('dl')
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i]
    const detail = details[i]
    appendElementWithText(dl, 'dt', term)
    appendElementWithText(dl, 'dd', detail)
  }
  return dl
}

const displayRecipe = function (recipe) {
  const div = document.getElementById('display-recipe')
  div.classList.add('blue-border', 'recipe-box')
  appendElementWithText(div, 'h1', recipe.title)

  const descriptionList = createDecriptionList(['Ingredients', 'Instructions', 'Total calories', 'Number of Portions', 'Calories per portion'], [recipe.ingredients, recipe.instructions, recipe.totalCalories, recipe.numberOfPortions, recipe.caloriesPerPortion])

  div.appendChild(descriptionList)
}

displayRecipe(getRecipe(1))
