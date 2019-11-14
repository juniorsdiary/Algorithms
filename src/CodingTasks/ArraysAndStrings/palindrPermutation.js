const checkPalindromePerm = string => {
  let array = string.split('');
  let charsObj = {};
  array.forEach(char => {
    let lower = char.toLowerCase();
    if (lower !== ' ') {
      if (charsObj[lower]) {
        delete charsObj[lower];
      } else {
        charsObj[lower] = 1;
      }
    }
  });
  return Object.keys(charsObj).length === 1;
};

console.log(checkPalindromePerm('Tact Coa'));
