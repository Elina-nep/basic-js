import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    let season = "";
    if (date) {
      if (date instanceof Date) {
        let chekDate = date.toString();
        let givenDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          date.getMilliseconds()
        ).toString();
        if (chekDate == givenDate) {
          let month = date.getMonth() + 1;
          if (month == 1 || month == 2 || month == 12) {
            return "winter";
          }
          if (month == 3 || month == 4 || month == 5) {
            return "spring";
          }
          if (month == 6 || month == 7 || month == 8) {
            return "summer";
          }
          if (month == 9 || month == 10 || month == 11) {
            return "autumn";
          }
        }
      }
      //throw new Error("Invalid date!");
    } else return "Unable to determine the time of year!";
  } catch {
    // do nothing
  }
  throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};
