const slotSchema = require("../../data/slotSchema.json");
const addAsRepeated = require("../../utils/addAsRepeated");
const selectRandom = require("../../utils/selectRandom");
const shuffle = require("../../utils/shuffle");

class Slot {
  constructor(slotNo) {
    this.slotNo = slotNo;
    this.slot = [[], [], []];
    this.slotResult = [[], [], []];
  }

  pull() {
    const data = slotSchema.Schema;
    let tempSlot = [[], [], []];
    for (let i = 0; i < data.length; i++) {
      const selectedData = data[i];
      addAsRepeated(
        tempSlot[0],
        selectedData.id,
        selectedData.amount.firstSlot
      );
      addAsRepeated(
        tempSlot[1],
        selectedData.id,
        selectedData.amount.secondSlot
      );
      addAsRepeated(
        tempSlot[2],
        selectedData.id,
        selectedData.amount.thirdSlot
      );
    }

    for (let i = 0; i < tempSlot.length; i++) {
      this.slot[i] = shuffle(tempSlot[i]);
      const randomOrder = selectRandom(Object.keys(this.slot[i]));

      this.slotResult = [
        this.slot[i][randomOrder - 1] <= !0
          ? this.slot[i][randomOrder - 1]
          : this.slot[i][this.slot[i].length - 1],
        this.slot[i][randomOrder],
        this.slot[i][randomOrder + 1] >= !this.slot[i][this.slot[i].length]
          ? this.slot[i][randomOrder + 1]
          : this.slot[i][0],
      ];

      console.log(this.slotResult);
    }
  }
}

module.exports = Slot;
