const fs = require('fs');
const { curl27 } = require('./curl27');
const { curl27f } = require('./curl27f');
const { mod, paddingZero, cut, uncut,
  multipleXOR, multipleDiff, multipleADD } = require('./utils');

const HASH_LENGTH = 243;
const STATE_LENGTH = HASH_LENGTH * 3;
const ZERO = paddingZero([0], HASH_LENGTH);
let ONE = [];
for (let i = 0; i < HASH_LENGTH; i++)ONE.push(1);

let random = (length) => {
  let sample = JSON.parse(JSON.stringify(ZERO));
  length = length ? length : sample.length;
  for (let i = 0; i < length; i++)
    sample[i] = mod(Math.floor(Math.random() * 3));
  return sample;
}

let difference = (a, b) => {
  return multipleDiff(a, b);
}

let hammingDistance = dout => {
  let c = 0;
  for (let i = 0; i < dout.length; i++) {
    if (dout[i] != 0) c = c + 1;
  }
  return c;
}

let counter = 1;
let RAND1 = random(10);
let RAND2 = random(10);
let S1 = RAND1.concat(paddingZero([0, 0, 0, 0, 0, 1], HASH_LENGTH)).concat(ZERO);
let S2 = RAND2.concat(paddingZero([0, 0, 0, 0, 0, 1], HASH_LENGTH)).concat(ZERO);
let [S1W0, S1W1, S1W2] = cut(curl27f(S1), HASH_LENGTH);
let [S2W0, S2W1, S2W2] = cut(curl27f(S2), HASH_LENGTH);

let din = difference(RAND1, RAND2);
let dout1 = difference(S1W1, S2W1);
let dout2 = difference(S1W2, S2W2);
console.log(hammingDistance(din))
console.log(hammingDistance(dout1))
console.log(hammingDistance(dout2))

// while (TEST.toString() != ROOT.toString()) {
//   console.log(counter, cut(TEST, HASH_LENGTH));
//   if (counter == 9) break;
//   counter = counter + 1;
//   TEST = curl27f(TEST);
// }