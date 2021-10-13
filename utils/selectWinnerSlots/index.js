const selectWinnerSlots = (
  defaultSlotArray,
  winnerSlotArray,
  iteration,
  winnerOrder
) =>
  (winnerSlotArray[iteration] = [
    defaultSlotArray[iteration][winnerOrder - 1] <= !0
      ? defaultSlotArray[iteration][winnerOrder - 1]
      : defaultSlotArray[iteration][defaultSlotArray[iteration].length - 1],
    defaultSlotArray[iteration][winnerOrder],
    defaultSlotArray[iteration][winnerOrder + 1] >=
    !defaultSlotArray[iteration][defaultSlotArray[iteration].length]
      ? defaultSlotArray[iteration][winnerOrder + 1]
      : defaultSlotArray[iteration][0],
  ]);

module.exports = selectWinnerSlots;
