const slotSchema = require('../../data/slotSchema.json')
const addAsRepeated = require('../../utils/addAsRepeated')
const selectRandom = require('../../utils/selectRandom')
const selectWinnerSlots = require('../../utils/selectWinnerSlots')
const shuffle = require('../../utils/shuffle')
const moveArrayElements = require('../../utils/moveArrayElements')

class Slot {
  constructor() {
    this.slot = [[], [], []]
    this.slotResult = [[], [], []]

    this.create()
  }

  create() {
    const data = slotSchema.Schema

    for (let i = 0; i < data.length; i++) {
      const selectedData = data[i]
      addAsRepeated(
        this.slot[0],
        selectedData.id,
        selectedData.amount.firstSlot
      )
      addAsRepeated(
        this.slot[1],
        selectedData.id,
        selectedData.amount.secondSlot
      )
      addAsRepeated(
        this.slot[2],
        selectedData.id,
        selectedData.amount.thirdSlot
      )
    }

    for (let i = 0; i < this.slot.length; i++) {
      this.slot[i] = shuffle(this.slot[i])
    }
  }

  pull() {
    for (let i = 0; i < this.slot.length; i++) {
      const randomOrder = selectRandom(Object.keys(this.slot[i]))
      selectWinnerSlots(this.slot, this.slotResult, i, randomOrder)
      // console.log(this.slot.length)
    }
    // console.log(this.slot)
    console.log(this.slotResult)
  }
}

module.exports = Slot
