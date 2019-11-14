// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = arr => {
  for (let index = 0; index < 4; index++) {
    for (let i = 0; i < arr.length - index; i++) {
      [arr[index][i], arr[arr.length - i - 1][arr.length - index - 1]] = [
        arr[arr.length - i - 1][arr.length - index - 1],
        arr[index][i],
      ];
    }
  }
  return arr;
};

let matrix = [
  [1, 2, 3, 4, 5], // 55555
  [1, 2, 3, 4, 5], // 44444
  [1, 2, 3, 4, 5], // 33333
  [1, 2, 3, 4, 5], // 22222
  [1, 2, 3, 4, 5], // 11111
];

console.log(rotateMatrix(matrix));
