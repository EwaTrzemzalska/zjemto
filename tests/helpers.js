function jsonCopy (src) {
  return JSON.parse(JSON.stringify(src))
}

const defaultDatabase = {
  recipes: [{
    'id': 4,
    'title': 'Pasta alla Genovese',
    'caloriesPerPortion': 568
  },
  {
    'id': 8,
    'title': 'Pizza',
    'caloriesPerPortion': 644
  }]
}

const setDefaultDatabase = function () {
  window.db = jsonCopy(defaultDatabase)
}

module.exports = {
  setDefaultDatabase: setDefaultDatabase
}
