const BN = require('bn.js');

let cut = (arr, length) => {
  let _arr = JSON.parse(JSON.stringify(arr));
  let re = [];
  while (_arr.length) {
    let temp = [];
    for (let i = 0; i < length; i++) temp.push(_arr.shift());
    re.push(temp);
  }
  return re;
}

let uncut = (arr, length) => {
  let _arr = JSON.parse(JSON.stringify(arr));
  let re = [];
  while (_arr.length) {
    for (let i = 0; i < length; i++) re.push(_arr[0][i]);
    _arr.shift();
  }
  return re;
}

let mod = a => {
  let residue = (a % 3 + 3) % 3;
  if (residue == 2) return -1;
  else return residue;
}

let shiftLeft = (arr, step) => {
  let re = [];
  for (let i = step; i < arr.length; i++) re.push(arr[i]);
  for (let i = 0; i < step; i++) re.push(arr[i]);
  return re;
}

let paddingZero = (arr, multiple) => {
  let _arr = JSON.parse(JSON.stringify(arr));
  let residue = _arr.length % multiple;
  let lack = (multiple - residue) % multiple;
  for (let i = 0; i < lack; i++) _arr.push(0);
  return _arr;
}

let decToTri = dec => {
  let d = dec;
  let re = [];
  while (d != 0) {
    let residue = mod(d);
    d = (d - residue) / 3;
    re.push(residue);
  }
  return re;
}

let triToDec = tri => {
  let re = new BN(0);
  for (let i = 0; i < tri.length; i++) {
    let a = (new BN(tri[i])).mul((new BN(3)).pow(new BN(i)));
    re = re.add(a);
  }
  return re.toString();
}

module.exports = { cut, uncut, mod, shiftLeft, paddingZero, decToTri, triToDec }