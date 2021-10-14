const selectWinnerSlots = (defArr, resArr, i, order) => {
  order === defArr[i].length - 1
    ? (resArr[i] = [defArr[i][order - 1], defArr[i][order], defArr[i][0]])
    : order === 0
    ? (resArr[i] = [
        defArr[i][defArr[i].length - 1],
        defArr[i][0],
        defArr[i][1]
      ])
    : (resArr[i] = [
        defArr[i][order - 1],
        defArr[i][order],
        defArr[i][order + 1]
      ])
}

module.exports = selectWinnerSlots
