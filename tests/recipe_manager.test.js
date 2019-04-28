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

const resetDatabase = function () {
  window.db = {...database};
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
  const newId = createRecipe({
    title: "Soup",
    ingredients: ["Tomato", "Cream"],
    instructions: "Cook",
    total_calories: 600,
    number_of_portions: 4
  });
  expect(getRecipe(newId)).toEqual({
    id: newId,
    title: "Soup",
    ingredients: ["Tomato", "Cream"],
    instructions: "Cook",
    total_calories: 600,
    number_of_portions: 4,
    calories_per_portion: 150
  })

  // TODO returns error when not enough keys


});

test("createRecipe returns false when used key not exist", () => {
 expect(createRecipe({
  title: "Soup",
  animal: ["Tomato", "Cream"],
  instructions: "Cook",
  total_calories: 600,
  number_of_portions: 4
 })).toBe(false);
});

test("updateRecipe prevents updating recipe's id (boolean)", () => {
  window.db = database;
  expect(updateRecipe(4, "id", 6)).toBe(false);
});

// test("updateRecipe prevents updating calories_per_portion (boolean)", () => {
//   window.db = database;
//   expect(updateRecipe(4, "calories_per_portion", 888)).toBe(false)
// });


// test("updateRecipe returns error when id doesn't exist (boolean)", () => {
//   window.db = database;
//   expect(updateRecipe(12, "title", 'Sausage')).toBe(false);
// });

// test("updateRecipe returns error when key doesn't exist (boolean)", () => {
//   window.db = database;
//   expect(updateRecipe(4, "animal", 'dog')).toBe(false);
// });

test("updateRecipe returns update recipe", () => {
  console.log(window.db);
  window.db = database;
  updateRecipe(4, "title", "My new Pasta");
  expect(getRecipe(4)).toEqual({
    id: 4,
    title: "My new Pasta",
    calories_per_portion: 568
  })
});





// test("updateRecipe prevents updating recipe's id", () => {
//   window.db = database;
//   expect(updateRecipe(4, "id", 6)).toThrow("You can't update id!");
// });

// test("updateRecipe prevents updating calories_per_portion", () => {
//   window.db = database;
//   expect(updateRecipe(4, "calories_per_portion", 888)).toThrow("You can't update calories_per_portion ")
// });

// test("updateRecipe returns error when id doesn't exist", () => {
//   window.db = database;
//   expect(updateRecipe(12, "title", 'Sausage')).toThrow("Your id doesn't exist")
// });

// test("updateRecipe returns error when key doesn't exist", () => {
//   window.db = database;
//   expect(updateRecipe(4, "animal", 'dog')).toThrow("Your key doesn't exist")
// });
