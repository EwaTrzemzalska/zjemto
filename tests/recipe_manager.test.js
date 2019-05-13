const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../js/recipe_manager')

const {
  setDefaultDatabase
} = require('./helpers.js')

test('getRecipes returns recipes', () => {
  setDefaultDatabase()
  expect(getRecipes()).toEqual([{
    id: 4,
    title: 'Pasta alla Genovese',
    caloriesPerPortion: 568
  },
  {
    id: 8,
    title: 'Pizza',
    caloriesPerPortion: 644
  }])
})

test('getRecipe returns recipe by id', () => {
  setDefaultDatabase()
  expect(getRecipe(4)).toEqual({
    id: 4,
    title: 'Pasta alla Genovese',
    caloriesPerPortion: 568
  })
})

test("getRecipe didn't returns recipe by not existing id", () => {
  setDefaultDatabase()
  expect(getRecipe(10)).toBe(undefined)
})

test("createRecipe returns new recipe's id", () => {
  setDefaultDatabase()
  const newId = createRecipe({
    title: 'Soup',
    ingredients: ['Tomato', 'Cream'],
    instructions: 'Cook',
    totalCalories: 600,
    numberOfPortions: 4
  })
  expect(getRecipe(newId)).toEqual({
    id: newId,
    title: 'Soup',
    ingredients: ['Tomato', 'Cream'],
    instructions: 'Cook',
    totalCalories: 600,
    numberOfPortions: 4,
    caloriesPerPortion: 150
  })

  // TODO returns error when not enough keys
})

test('createRecipe returns false when used key not exist', () => {
  expect(createRecipe({
    title: 'Soup',
    animal: ['Tomato', 'Cream'],
    instructions: 'Cook',
    totalCalories: 600,
    numberOfPortions: 4
  })).toBe(false)
})

test('updateRecipe properly updates recipe title', () => {
  setDefaultDatabase()
  updateRecipe(4, 'title', 'My new Pasta')
  expect(getRecipe(4)).toEqual({
    id: 4,
    title: 'My new Pasta',
    caloriesPerPortion: 568
  })
})

test("updateRecipe prevents updating recipe's id", () => {
  setDefaultDatabase()
  expect(() => updateRecipe(4, 'id', 6)).toThrow("You can't update id!")
})

test('updateRecipe prevents updating caloriesPerPortion', () => {
  setDefaultDatabase()
  expect(() => updateRecipe(4, 'caloriesPerPortion', 888)).toThrow("You can't update caloriesPerPortion!")
})

test("updateRecipe returns error when id doesn't exist", () => {
  setDefaultDatabase()
  expect(() => updateRecipe(12, 'title', 'Sausage')).toThrow("Your id doesn't exist")
})

test("updateRecipe returns error when key doesn't exist", () => {
  setDefaultDatabase()
  expect(() => updateRecipe(4, 'animal', 'dog')).toThrow("Your key doesn't exist")
})

test('deleteRecipe deletes recipe from database', () => {
  setDefaultDatabase()
  deleteRecipe(4)
  expect(getRecipe(4)).toBe(undefined)
})
