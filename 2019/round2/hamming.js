// For Hamming (7,4) only
// m1m2m3m4 p1p2p3
// ------------------------------
// 1  2  3  4  5  6  7
// p1 p2 m1 p3 m2 m3 m4
// 0  1     2
//       0     1  2  3
// ------------------------------
// p1 -> 1 3 5 7 for even parity
// p2 -> 2 3 6 7 for even parity
// p3 -> 4 5 6 7 for even parity


let replaceDatawordToCodeword = (dataword, codeword) => {
  codeword[2] = dataword[0];
  codeword[4] = dataword[1];
  codeword[5] = dataword[2];
  codeword[6] = dataword[3];
  return codeword;
}

let getDatawordFromCodeword = codeword => {
  let dataword = [];
  dataword[0] = codeword[2];
  dataword[1] = codeword[4];
  dataword[2] = codeword[5];
  dataword[3] = codeword[6];
  return dataword;
}

let replaceSyndromeToCodeword = (syndrome, codeword) => {
  codeword[0] = syndrome[0];
  codeword[1] = syndrome[1];
  codeword[3] = syndrome[2];
  return codeword;
}

let getSyndromeFromCodeword = codeword => {
  let syndrome = [];
  syndrome[0] = codeword[0];
  syndrome[1] = codeword[1];
  syndrome[2] = codeword[3];
  return syndrome;
}

let getSyncrome = dataword => {
  let p1 = (dataword[0] + dataword[1] + dataword[3]) % 2;
  let p2 = (dataword[0] + dataword[2] + dataword[3]) % 2;
  let p3 = (dataword[1] + dataword[2] + dataword[3]) % 2;
  return [p1, p2, p3];
}

let getCodeword = dataword => {
  let codeword = [];
  let syndrome = getSyncrome(dataword);
  codeword = replaceDatawordToCodeword(dataword, codeword);
  codeword = replaceSyndromeToCodeword(syndrome, codeword);
  return codeword;
}

let checkError = codeword => {
  let E3 = (codeword[3] + codeword[4] + codeword[5] + codeword[6]) % 2;
  let E2 = (codeword[1] + codeword[2] + codeword[5] + codeword[6]) % 2;
  let E1 = (codeword[0] + codeword[2] + codeword[4] + codeword[6]) % 2;
  let error = E1 + E2 * 2 + E3 * 4;
  return error - 1;
}

let recovery = codeword => {
  let toogleBit = (arr, index) => {
    arr[index] = arr[index] == 0 ? 1 : 0;
    return arr;
  }
  let index = checkError(codeword);
  if (index < 0) return getDatawordFromCodeword(codeword);
  else return getDatawordFromCodeword(toogleBit(codeword, index));
}

module.exports = { getCodeword, recovery }