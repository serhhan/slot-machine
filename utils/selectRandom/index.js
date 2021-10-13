const selectRandom = array => {
  return Number(array[Math.floor(Math.random() * array.length)])
}

module.exports = selectRandom
