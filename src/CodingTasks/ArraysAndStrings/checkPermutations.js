import selectionSorting from '../Algorithms/selectionSorting';

const checkPermutations = (s1, s2) => {
  if (s1.length === s2.length) {
    let s1SortedArray = selectionSorting(s1.split(''));
    let s2SortedArray = selectionSorting(s2.split(''));
    return s1SortedArray === s2SortedArray;
  }
  return false;
};

console.log(checkPermutations('aba', 'aab'), true);
console.log(checkPermutations('aba', 'aaba'), false);
console.log(checkPermutations('aba', 'aa'), false);
