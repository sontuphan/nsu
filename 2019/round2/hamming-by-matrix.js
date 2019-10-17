const math = require('mathjs');

let H = math.matrix([
  [0, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
]);
let G = math.matrix([
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]);

let getCodeword = dataword => {
  let codeword = math.multiply(G, math.matrix(dataword));
  return codeword._data.map(item => item % 2);
}

let getSyncDrome = codeword => {
  let syndrome = math.multiply(H, math.matrix(codeword));
  return syndrome._data.map(item => item % 2);
}

let recovery = codeword => {
  let syndrome = getSyncDrome(codeword);
  let index = syndrome[2] + syndrome[1] * 2 + syndrome[0] * 4 - 1;
  codeword[index] = codeword[index] == 0 ? 1 : 0;
  let dataword = [];
  dataword[0] = codeword[2];
  dataword[1] = codeword[4];
  dataword[2] = codeword[5];
  dataword[3] = codeword[6];
  return dataword;
}


module.exports = { getCodeword, recovery }