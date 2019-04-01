const sum = require('../js/recipe_manager');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

let dataBase = {
  recipes: [{
    id: 4,
    title: "Pasta alla Genovese"
  },
  {
    id: 8,
    title: "Pizza"
  }
  ]
};


test('getRecipes returns recipes', () => {
  window.db = dataBase;
  expect(getRecipes()).toBe([{
    id: 4,
    title: "Pasta alla Genovese"
  }]);
});

test('getRecipe returns recipe by id ', () => {
  window.db = dataBase;
  expect(getRecipe(4).toBe({
    id: 4,
    title: "Pasta alla Genovese"
  }));
});

test('getRecipe returns recipe by id ', () => {
  window.db = dataBase;
  expect(getRecipe(8).toBe({
    id: 8,
    title: "Pizza"
  }));
});
