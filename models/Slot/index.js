const slotSchema = require("../../data/slotSchema.json");
const addAsRepeated = require("../../utils/addAsRepeated/addAsRepeated");

class Slot {
  constructor(slotNo) {
    this.slotNo = slotNo;
    this.slot = [];
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
      console.log(tempSlot);
    }
  }
}

module.exports = Slot;
