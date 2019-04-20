const {
  getRecipes,
  getRecipe, 
  createRecipe, 
  updateRecipe,
  deleteRecipe
} = require('../js/recipe_manager');


let database = {
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


test("getRecipes returns recipes", () => {
  window.db = database;
  expect(getRecipes()).toEqual([{
    id: 4,
    title: "Pasta alla Genovese",
    calories_per_portion: 568
  },
  {
    id: 8,
    title: "Pizza",
    calories_per_portion: 644
  }]);
});

test("getRecipe returns recipe by id", () => {
  window.db = database;
  expect(getRecipe(4)).toEqual({
    id: 4,
    title: "Pasta alla Genovese",
    calories_per_portion: 568
  });
});

test("getRecipe didn't returns recipe by not existing id", () => {
  window.db = database;
  expect(getRecipe(10)).toBe(undefined);
});

test("createRecipe returns new recipe's id", () => {
  window.db = database;
  const newId = createRecipe({title: "Soup", calories_per_portion: 244});
  expect(getRecipe(newId)).toBe({
    id: newId,
    title: "Soup",
    calories_per_portion: 244
  })
  // if ID is new
  // if any ID is returned
  // if function returns error when you use not existing key
  // if calculates calories_per_portion
  // 
});

test("updateRecipe prevents updating recipe's id", () => {
 window.db = database;
 expect(updateRecipe(4, "id", 6)).toThrow("You can't update id!");
});

test("updateRecipe prevents updating calories_per_portion", () => {
  window.db = database;
  expect(updateRecipe(4, "calories_per_portion", 888)).toThrow("You can't update calories_per_portion ")
});

test("updateRecipe returns error when id doesn't exist", () => {
  window.db = database;
  expect(updateRecipe(12, "title", 'Sausage')).toThrow("Your id doesn't exist")
});

test("updateRecipe returns error when key doesn't exist", () => {
  window.db = database;
  expect(updateRecipe(4, "animal", 'dog')).toThrow("Your key doesn't exist")
});
