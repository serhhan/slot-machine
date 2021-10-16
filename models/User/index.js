//user - balance, currency, betHistory, latBetStatus, slot, betfn

const Slot = require('../Slot')
const calculatePrize = require('../../utils/calculatePrize')

class User {
  constructor() {
    this.balance = 100
    this.currency = 'dollar'
    this.betHistory = []
    this.slot = new Slot()

    this.createSlot()
  }

  createSlot() {
    this.slot.create()
  }

  bet(amount) {
    this.slot.pull()
    calculatePrize(amount, this.balance, this.slot.slotResult)
  }
}

module.exports = User
