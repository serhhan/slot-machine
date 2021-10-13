const moveArrayElements = (arr, index) => {
  const spliceStart = index === 0 ? arr.length - 1 : index - 1
  const items = arr.splice(spliceStart, 3)
}

module.exports = moveArrayElements
