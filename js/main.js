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
