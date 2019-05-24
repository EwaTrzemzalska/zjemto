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

const buildRecipeDetails = function (recipeDetails) {
  const dl = document.createElement('dl')

  for (let i = 0; i < recipeDetails.length; i++) {
    const { label, value } = recipeDetails[i]
    appendElementWithText(dl, 'dt', label)
    appendElementWithText(dl, 'dd', value)
  }
  return dl
}

const displayRecipe = function (recipe) {
  const div = document.getElementById('display-recipe')
  div.classList.add('blue-border', 'recipe-box')
  appendElementWithText(div, 'h1', recipe.title)

  const descriptionList = buildRecipeDetails([
    {
      label: 'Ingredients',
      value: recipe.ingredients
    },
    {
      label: 'Instructions',
      value: recipe.instructions
    },
    {
      label: 'Total calories',
      value: recipe.totalCalories
    },
    {
      label: 'Number of Portions',
      value: recipe.numberOfPortions
    },
    {
      label: 'Calories per portion',
      value: recipe.caloriesPerPortion
    }
  ])

  div.appendChild(descriptionList)
}

displayRecipe(getRecipe(1))
