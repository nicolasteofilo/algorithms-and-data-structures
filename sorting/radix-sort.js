// HELPER METHODS

/**
 *
 * @param {number} num
 * @param {number} place
 */
function getDigit(num, place) {
  const position = String(num)[(String(num).length - 1) - place];
  if (position) return Number(position);
  return 0;
}
