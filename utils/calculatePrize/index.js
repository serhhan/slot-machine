const isAllEqual = require('../isAllEqual')

const calculatePrize = (amount, balance, slotResults) => {
  for (let i = 0; i < slotResults[0].length; i++) {
    const firstLine = slotResults[0][0]
    const secondLine = slotResults[1][0]
    const thirdLine = slotResults[2][0]

    isAllEqual([firstLine, secondLine, thirdLine])
      ? console.log('all equal')
      : console.log('no equal')
  }
}

module.exports = calculatePrize
