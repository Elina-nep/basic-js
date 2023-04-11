const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function dateSample(sampleActivitySTR) {
  if (typeof sampleActivitySTR == "string") {
    let sampleActivity = Number(sampleActivitySTR);
    if (
      (Number.isInteger(sampleActivity) || isFloat(sampleActivity)) &&
      sampleActivity <= MODERN_ACTIVITY &&
      sampleActivity > 0
    ) {
      let k = 0.693 / HALF_LIFE_PERIOD;
      let timeLife = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

      return timeLife;
    } else return false;
  } else return false;
}

module.exports = {
  dateSample,
};
