function add(a, b, callback) {
  setTimeout(() => callback(a + b), 100)
}

module.exports = add