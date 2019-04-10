const {
  getRecipes,
  getRecipe, 
  createRecipe, 
  updateRecipe,
  deleteRecipe
} = require('../js/recipe_manager');




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
  });
});

test('getRecipe didn\' t returns recipe by not existing id ', () => {
  window.db = database;
  expect(getRecipe(10)).toBe(null);
});

test('createRecipe returns new recipe\'s id', () => {
  window.db = database;
  const newId = createRecipe({title: "Soup"});
  expect(getRecipe(newId)).toBe({
    id: newId,
    title: "Soup"
  })
  // if ID is new
  // if any ID is returned
  // if function returns error when you use not existing key
  // if calculates calories_per_portion
  // 
});

test('updateRecipe prevents updating recipe\'s id', () => {
 window.db = database;
 expect(updateRecipe(4, id, 6)).toBe(error);
});

test('updateRecipe prevents updating calories_per_portion', () => {
  window.db = {
    recipes: [{
      id: 4,
      title: "Pasta alla Genovese",
      calories_per_portion: 568
    },
    {
      id: 8,
      title: "Pizza",
      calories_per_portion: 644
    }]
  };
  expect(updateRecipe(4, calories_per_portion, 888)).toBe(error);
});

test('updateRecipe returns error when id doesn\'t exist', () => {
  window.db = database;
  expect(updateRecipe(12, title, 'Sausage')).toBe(error)
});

test('updateRecipe returns error when key doesn\'t exist', () => {
  window.db = database;
  expect(updateRecipe(4, animal, 'dog')).toBe(error)
});
