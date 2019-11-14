const stringCompression = str => {
  let array = str.split('');
  let result = '';
  let i = 0;
  while (array[0]) {
    let target = array[i];
    let regex = new RegExp(`${target}+`);
    result += `${target}${str.match(regex)[0].length}`;
    array.splice(0, str.match(regex)[0].length);
  }
  return result;
};

console.log(stringCompression('aaabbb'), 'result');
console.log(stringCompression('aabbb'), 'result');
console.log(stringCompression('abbbc'), 'result');
console.log(stringCompression('aaaaaccccgsssdhjjhgjrrrttttbbb'), 'result');
