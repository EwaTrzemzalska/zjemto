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

const myRecipes = getRecipes()

for (let i = 0; i < myRecipes.length; i++) {
  console.log(myRecipes[i])
}
