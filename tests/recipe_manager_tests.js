const sum = require('../js/recipe_manager');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

let database = {
  recipes: [{
    id: 4,
    title: "Pasta alla Genovese"
  },
  {
    id: 8,
    title: "Pizza"
  }]
};


test('getRecipes returns recipes', () => {
  window.db = database;
  expect(getRecipes()).toEqual([{
    id: 4,
    title: "Pasta alla Genovese"
  },
  {
    id: 8,
    title: "Pizza"
  }]);
});

test('getRecipe returns recipe by id ', () => {
  window.db = database;
  expect(getRecipe(4)).toEqual({
    id: 4,
    title: "Pasta alla Genovese"
  }));
});

test('getRecipe didn\' t returns recipe by not existing id ', () => {
  window.db = database;
  expect(getRecipe(10)).toBe(null);
});

test('createRecipe returns new recipe\'s id', () => {
  window.db = database;
  expect(createRecipe({title: "Soup"}).toBe())
  // if ID is new
  // if any ID is returned
  // if function returns error when you use not existing key
  // if calculates calories_per_portion
  // 
});
