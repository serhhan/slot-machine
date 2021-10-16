const isAllEqual = require('../isAllEqual')

const calculatePrize = (amount, balance, currency, slotResults) => {
  if (balance - amount >= 0) {
    balance = balance - amount

    for (let i = 0; i < slotResults[0].length; i++) {
      const firstLine = slotResults[0][i]
      const secondLine = slotResults[1][i]
      const thirdLine = slotResults[2][i]

      if (isAllEqual([firstLine, secondLine, thirdLine])) {
        if (firstLine === 0) {
          const winPot = amount * 200
          balance = balance + winPot
          console.log(
            `YOU WIN! 
            Added ${winPot} ${currency}s to your balance! New balance is: ${balance} ${currency}s`
          )
        } else if (firstLine === 1 || firstLine === 2) {
          const winPot = amount * 100
          balance = balance + winPot
          console.log(
            `YOU WIN! 
            Added ${winPot} ${currency}s to your balance! New balance is: ${balance} ${currency}s`
          )
        } else if (firstLine === 3) {
          const winPot = amount * 18
          balance = balance + winPot
          console.log(
            `YOU WIN! ${(firstLine, secondLine, thirdLine)}
            Added ${winPot} ${currency}s to your balance! New balance is: ${balance} ${currency}s`
          )
        } else if (firstLine === 4) {
          const winPot = amount * 14
          balance = balance + winPot
          console.log(
            `YOU WIN!
            Added ${winPot} ${currency}s to your balance! New balance is: ${balance} ${currency}s`
          )
        } else if (firstLine === 5) {
          const winPot = amount * 10
          balance = balance + winPot
          console.log(
            `YOU WIN!
            Added ${winPot} ${currency}s to your balance! New balance is: ${balance} ${currency}s`
          )
        }
      }
    }
  } else {
    console.log('not enough balance')
  }
}

module.exports = calculatePrize
