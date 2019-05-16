console.log('Hello World')

const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../js/recipe_manager')

// zrobic loopa ktory consolloguje recipesy
// stworz funkcje ktorej jak przeslesz recipe to doda ja do listy na stronie

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
