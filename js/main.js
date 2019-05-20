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

// const displayRecipe = function (id) {
//   const recipe = getRecipe(id)
//   const p = document.createElement('p')
//   const recipeTitle = document.createTextNode(recipe.title)
//   const recipeIngredients = document.createTextNode(recipe.ingredients)
//   p.appendChild(recipeTitle)
//   p.appendChild(recipeIngredients)
//   const div = document.getElementById('display-recipe')
//   div.appendChild(p)
// }

// displayRecipe(1)

// loop over ingredients array, put each one to separate li
