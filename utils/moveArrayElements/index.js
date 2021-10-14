const moveArrayElements = (arr, index) => {
  const spliceStart = index === 0 ? arr.length - 1 : index - 1
  const items = arr.splice(spliceStart, 3)

  arr.unshift(...items)
}

module.exports = moveArrayElements
