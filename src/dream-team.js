import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let teamName = "";
    let membersNew = [];
    for (let memberIndex = 0; memberIndex < members.length; memberIndex++) {
      let member = members[memberIndex];
      if (typeof member === "string") {
        member = member.trim();

        membersNew.push(member.toUpperCase());
      } else {
      }
    }
    membersNew = membersNew.sort();
    for (let memberIndex = 0; memberIndex < membersNew.length; memberIndex++) {
      let member = membersNew[memberIndex];

      if (typeof member === "string") {
        let FirstLett = member[0];

        teamName = teamName + FirstLett;
      }
    }

    return teamName;
  } else return false;
}

module.exports = {
  createDreamTeam,
};
