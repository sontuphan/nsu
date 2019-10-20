const { shiftLeft, paddingZero, decToTri, singleXOR } = require('./utils');
const { curl27f } = require('./curl27f');
const { curl27 } = require('./curl27');

const TEST = {
  msg: [0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1],
  hash: [1, 1, -1, -1, 0, 1, 0, -1, 0, 0, 0, -1, 0, 1, 0, 1, -1, 0, 0, 0, 1, 0, 1, -1, -1, 1, 0, 0, 0, 1, 0, 0, -1, 0, 1, -1, 0, 0, 1, -1, -1, -1, 0, 0, 1, 1, 0, 0, -1, 0, 1, 1, 1, 1, -1, 0, 0, 1, 0, 1, 0, -1, 0, 0, 0, 1, 0, 1, 1, -1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, -1, 1, 1, 1, 1, -1, -1, 1, 0, 1, -1, 1, 1, -1, -1, 1, 1, -1, -1, -1, 0, -1, 0, 0, -1, 0, -1, -1, -1, -1, 1, 1, -1, -1, 1, 0, 1, 0, -1, 0, 1, 0, 1, -1, 1, 0, 0, -1, -1, 1, 1, -1, -1, 0, 0, 1, 1, 0, -1, -1, 1, -1, 0, 0, -1, 1, -1, 0, -1, 0, -1, -1, 1, -1, 1, -1, -1, 0, 1, 1, 0, -1, 0, 1, 1, -1, 0, -1, -1, 0, 1, 1, -1, -1, 0, 1, 1, 1, 0, -1, 1, -1, -1, 0, 0, 0, -1, 1, 1, 1, -1, 0, 1, 1, 1, 0, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 1, -1, -1, 1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 0, 0, -1, 1, 1, -1, 0, -1, -1, 0, 0, 1, 1, 1, -1, 0, 1, -1, 0, 0]
}


let groupPermutations = arr => {
  let step = arr.length / 3;
  let re = [].concat(arr);
  re = re.concat(shiftLeft(arr, step));
  re = re.concat(shiftLeft(shiftLeft(arr, step), step));
  return re;
}

let data = [0, -1, 1];
while (data.length != 729) data = groupPermutations(data);

console.log('Test curl27f:', data.toString() == curl27f(data).toString());
console.log('Test paddingZero:', paddingZero(paddingZero([1], 729), 729).length == 729);
console.log('Test decToTri:', decToTri(25).toString() == [1, -1, 0, 1].toString());
console.log('Test curl27:', curl27(TEST.msg).toString() == TEST.hash.toString());
console.log('Test singleXOR:', singleXOR(1, 1) == -1)