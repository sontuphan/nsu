const fs = require('fs');
const { curl27 } = require('./curl27');
const { mod } = require('./utils');

const HASH_LENGTH = 243;
const ZERO = [];
const ONE = [];
for (let i = 0; i < HASH_LENGTH; i++) {
  ZERO.push(0);
  ONE.push(1);
}

let random = () => {
  let sample = JSON.parse(JSON.stringify(ZERO));
  for (let i = 0; i < sample.length; i++)
    sample[i] = mod(Math.floor(Math.random() * 3));
  return sample;
}

let HASH_ZERO = curl27(ZERO);
let HASH_ONE = curl27(ONE);


console.log('Running...');

let ok = false;
let counter = 0;
while (!ok) {
  let seed = random();
  let hash = curl27(seed);

  if (
    hash.toString() == HASH_ZERO.toString()
    && hash.toString() == HASH_ZERO.toString()
  ) {
    ok = true;
    return fs.writeFileSync('./result.json', seed);
  }

  if (
    hash.toString() == HASH_ONE.toString()
    && hash.toString() == HASH_ONE.toString()
  ) {
    ok = true;
    return fs.writeFileSync('./result.json', seed);
  }

  counter = counter + 1;
}

console.log('Done!');
