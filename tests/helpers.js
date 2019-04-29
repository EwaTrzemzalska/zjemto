function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}

const defaultDatabase = {
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

const setDefaultDatabase = function () {
  window.db = jsonCopy(defaultDatabase);
};


module.exports = {
  setDefaultDatabase: setDefaultDatabase,

}
