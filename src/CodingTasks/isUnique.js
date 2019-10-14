const isUnique = str => {
  let l = str.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isUnique('Vladislav')); // false
console.log(isUnique('Alladin')); // false
console.log(isUnique('Forever')); // false
console.log(isUnique('abcdgf')); // true
console.log(isUnique('lablbfdf')); // false
console.log(isUnique('Fruit')); // true
