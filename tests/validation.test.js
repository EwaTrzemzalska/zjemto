const {
  validateRecipeKey,
  validateRecipe
} = require('../js/validation')

test('validateRecipeKey properly validates title', () => {
  expect(() => validateRecipeKey('title', null)).toThrow('title has to be of type string')
  expect(() => validateRecipeKey('title', undefined)).toThrow('title has to be of type string')
  expect(() => validateRecipeKey('title', 56)).toThrow('title has to be of type string')
  expect(() => validateRecipeKey('title', true)).toThrow('title has to be of type string')
  expect(() => validateRecipeKey('title', {})).toThrow('title has to be of type string')
  expect(validateRecipeKey('title', 'Mushroom Soup')).toBe(true)
})

test('validateRecipeKey properly validates instructions', () => {
  expect(() => validateRecipeKey('instructions', null)).toThrow('instructions has to be of type string')
  expect(() => validateRecipeKey('instructions', undefined)).toThrow('instructions has to be of type string')
  expect(() => validateRecipeKey('instructions', 56)).toThrow('instructions has to be of type string')
  expect(() => validateRecipeKey('instructions', true)).toThrow('instructions has to be of type string')
  expect(() => validateRecipeKey('instructions', {})).toThrow('instructions has to be of type string')
  expect(validateRecipeKey('instructions', 'Mushroom Soup')).toBe(true)
})

test('validateRecipeKey properly validates totalCalories', () => {
  expect(() => validateRecipeKey('totalCalories', null)).toThrow('totalCalories has to be of type number')
  expect(() => validateRecipeKey('totalCalories', undefined)).toThrow('totalCalories has to be of type number')
  expect(() => validateRecipeKey('totalCalories', true)).toThrow('totalCalories has to be of type number')
  expect(() => validateRecipeKey('totalCalories', {})).toThrow('totalCalories has to be of type number')
  expect(() => validateRecipeKey('totalCalories', '450')).toThrow('totalCalories has to be of type number')
  expect(validateRecipeKey('totalCalories', 450)).toBe(true)
})

test('validateRecipeKey properly validates numberOfPortions', () => {
  expect(() => validateRecipeKey('numberOfPortions', null)).toThrow('numberOfPortions has to be of type number')
  expect(() => validateRecipeKey('numberOfPortions', undefined)).toThrow('numberOfPortions has to be of type number')
  expect(() => validateRecipeKey('numberOfPortions', true)).toThrow('numberOfPortions has to be of type number')
  expect(() => validateRecipeKey('numberOfPortions', {})).toThrow('numberOfPortions has to be of type number')
  expect(() => validateRecipeKey('numberOfPortions', '450')).toThrow('numberOfPortions has to be of type number')
  expect(validateRecipeKey('numberOfPortions', 450)).toBe(true)
})

test('validateRecipeKey properly validates id', () => {
  expect(() => validateRecipeKey('id', null)).toThrow('id has to be of type number')
  expect(() => validateRecipeKey('id', undefined)).toThrow('id has to be of type number')
  expect(() => validateRecipeKey('id', true)).toThrow('id has to be of type number')
  expect(() => validateRecipeKey('id', {})).toThrow('id has to be of type number')
  expect(() => validateRecipeKey('id', '450')).toThrow('id has to be of type number')
  expect(validateRecipeKey('id', 450)).toBe(true)
})

test('validateRecipeKey properly validates ingredients', () => {
  expect(() => validateRecipeKey('ingredients', null)).toThrow('ingredients has to be of type Array')
  expect(() => validateRecipeKey('ingredients', undefined)).toThrow('ingredients has to be of type Array')
  expect(() => validateRecipeKey('ingredients', 56)).toThrow('ingredients has to be of type Array')
  expect(() => validateRecipeKey('ingredients', true)).toThrow('ingredients has to be of type Array')
  expect(() => validateRecipeKey('ingredients', {})).toThrow('ingredients has to be of type Array')
  expect(() => validateRecipeKey('ingredients', 'Mushroom, cream')).toThrow('ingredients has to be of type Array')
  expect(validateRecipeKey('ingredients', ['Mushroom, cream'])).toBe(true)
})

test('validateRecipeKey properly validates if every ingredient is a string', () => {
  expect(() => validateRecipeKey('ingredients', [null, 'cream'])).toThrow('every ingredient has to be of type string')
  expect(() => validateRecipeKey('ingredients', [undefined, 'cream'])).toThrow('every ingredient has to be of type string')
  expect(() => validateRecipeKey('ingredients', ['cream', 56])).toThrow('every ingredient has to be of type string')
  expect(() => validateRecipeKey('ingredients', ['cream', true])).toThrow('every ingredient has to be of type string')
  expect(() => validateRecipeKey('ingredients', [{}, 'cream'])).toThrow('every ingredient has to be of type string')
  expect(() => validateRecipeKey('ingredients', [['Mushroom'], ['cream']])).toThrow('every ingredient has to be of type string')
  expect(validateRecipeKey('ingredients', ['Mushroom', 'cream'])).toBe(true)
})

test("validateRecipeKey returns false when key doesn't exist", () => {
  expect(validateRecipeKey('animal', 'doggo')).toBe(false)
})

test('validateRecipe returns true for valid recipe', () => {
  expect(validateRecipe({
    'id': 4,
    'title': 'Pasta alla Genovese',
    'caloriesPerPortion': 568
  })).toBe(true)
})

test('validateRecipe returns false for empty recipe', () => {
  expect(validateRecipe({})).toBe(false)
})

test('validateRecipe returns false for invalid recipe', () => {
  expect(validateRecipe({
    'id': 10,
    'title': 'Tomato Soup',
    'animal': 'frog'
  })).toBe(false)
})
