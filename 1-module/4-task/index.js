/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let newString = str.toLowerCase();
  if (newString.includes('1xbet') || newString.includes('xxx')) {
    return true;
  } return false;
}
