const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => `<li>${x}</li>`);
console.log(map1);
// expected output: Array [2, 8, 18, 32]