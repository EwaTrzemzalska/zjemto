const {
  getRecipes,
  getRecipe, 
  createRecipe, 
  updateRecipe,
  deleteRecipe,
  validateRecipeKey,
  validateRecipe
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

test("validateRecipeKey properly validates title", () => {
  expect(() => validateRecipeKey("title", null)).toThrow("title has to be string");
  expect(() => validateRecipeKey("title", undefined)).toThrow("title has to be string");
  expect(() => validateRecipeKey("title", 56)).toThrow("title has to be string");
  expect(() => validateRecipeKey("title", true)).toThrow("title has to be string");
  expect(() => validateRecipeKey("title", {})).toThrow("title has to be string");
  expect(validateRecipeKey("title", "Mushroom Soup")).toBe(true);
});

test("validateRecipeKey properly validates instructions", () => {
  expect(() => validateRecipeKey("instructions", null)).toThrow("instructions has to be string");
  expect(() => validateRecipeKey("instructions", undefined)).toThrow("instructions has to be string");
  expect(() => validateRecipeKey("instructions", 56)).toThrow("instructions has to be string");
  expect(() => validateRecipeKey("instructions", true)).toThrow("instructions has to be string");
  expect(() => validateRecipeKey("instructions", {})).toThrow("instructions has to be string");
  expect(validateRecipeKey("instructions", "Mushroom Soup")).toBe(true);
});

test("validateRecipeKey properly validates total_calories", () => {
  expect(() => validateRecipeKey("total_calories", null)).toThrow("total_calories has to be number");
  expect(() => validateRecipeKey("total_calories", undefined)).toThrow("total_calories has to be number");
  expect(() => validateRecipeKey("total_calories", true)).toThrow("total_calories has to be number");
  expect(() => validateRecipeKey("total_calories", {})).toThrow("total_calories has to be number");
  expect(() => validateRecipeKey("total_calories", "450")).toThrow("total_calories has to be number");
  expect(validateRecipeKey("total_calories", 450)).toBe(true);
});

test("validateRecipeKey properly validates number_of_portions", () => {
  expect(() => validateRecipeKey("number_of_portions", null)).toThrow("number_of_portions has to be number");
  expect(() => validateRecipeKey("number_of_portions", undefined)).toThrow("number_of_portions has to be number");
  expect(() => validateRecipeKey("number_of_portions", true)).toThrow("number_of_portions has to be number");
  expect(() => validateRecipeKey("number_of_portions", {})).toThrow("number_of_portions has to be number");
  expect(() => validateRecipeKey("number_of_portions", "450")).toThrow("number_of_portions has to be number");
  expect(validateRecipeKey("number_of_portions", 450)).toBe(true);
});

test("validateRecipeKey properly validates id", () => {
  expect(() => validateRecipeKey("id", null)).toThrow("id has to be number");
  expect(() => validateRecipeKey("id", undefined)).toThrow("id has to be number");
  expect(() => validateRecipeKey("id", true)).toThrow("id has to be number");
  expect(() => validateRecipeKey("id", {})).toThrow("id has to be number");
  expect(() => validateRecipeKey("id", "450")).toThrow("id has to be number");
  expect(validateRecipeKey("id", 450)).toBe(true);
});

test("validateRecipeKey properly validates ingredients", () => {
  expect(() => validateRecipeKey("ingredients", null)).toThrow("ingredients has to be Array");
  expect(() => validateRecipeKey("ingredients", undefined)).toThrow("ingredients has to be Array");
  expect(() => validateRecipeKey("ingredients", 56)).toThrow("ingredients has to be Array");
  expect(() => validateRecipeKey("ingredients", true)).toThrow("ingredients has to be Array");
  expect(() => validateRecipeKey("ingredients", {})).toThrow("ingredients has to be Array");
  expect(() => validateRecipeKey("ingredients", "Mushroom, cream")).toThrow("ingredients has to be Array");
  expect(validateRecipeKey("ingredients", ["Mushroom, cream"])).toBe(true);
});

test("validateRecipeKey properly validates if every ingredient is a string", () => {
  expect(() => validateRecipeKey("ingredients", [null, "cream"])).toThrow("every ingredient has to be string");
  expect(() => validateRecipeKey("ingredients", [undefined, "cream"])).toThrow("every ingredient has to be string");
  expect(() => validateRecipeKey("ingredients", ["cream", 56])).toThrow("every ingredient has to be string");
  expect(() => validateRecipeKey("ingredients", ["cream", true])).toThrow("every ingredient has to be string");
  expect(() => validateRecipeKey("ingredients", [{}, "cream"])).toThrow("every ingredient has to be string");
  expect(() => validateRecipeKey("ingredients", [["Mushroom"], ["cream"]])).toThrow("every ingredient has to be string");
  expect(validateRecipeKey("ingredients", ["Mushroom", "cream"])).toBe(true);
});
