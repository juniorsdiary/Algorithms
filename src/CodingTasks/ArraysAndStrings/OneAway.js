const oneAway = (s1, s2) => {
  return (
    s2.split('').filter(char => s1.includes(char)).length === s1.length - 1
  );
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false
