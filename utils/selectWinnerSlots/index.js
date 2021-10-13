const selectWinnerSlots = (defArr, resArr, i, order) => {
  const isLast = defArr[order] === defArr[defArr.length]
  const isFirst = defArr[order] === defArr[0]
  const next = order + 1
  const previous = order - 1

  resArr[i] = isLast
    ? [
        defArr[i][defArr[i].length - 2],
        defArr[i][defArr[i].length - 1],
        defArr[i][0]
      ]
    : isFirst
    ? [defArr[i][defArr[i].length - 1], defArr[i][0], defArr[i][1]]
    : [defArr[i][previous], defArr[i][order], defArr[i][next]]
}

module.exports = selectWinnerSlots
