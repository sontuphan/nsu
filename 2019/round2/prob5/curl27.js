const { cut, uncut, paddingZero, decToTri } = require('./utils');
const { curl27f } = require('./curl27f');

const HASH_LENGTH = 243;


let W = (w, x) => {
  if (w && !x) {
    let w1 = paddingZero([0], HASH_LENGTH);
    let w2 = paddingZero(decToTri(w.length), HASH_LENGTH);
    let w3 = paddingZero([0], HASH_LENGTH);
    let _w = [];
    _w.push(w1); _w.push(w2); _w.push(w3);
    return _w;
  } else {
    let _w = JSON.parse(JSON.stringify(w));
    let _x = JSON.parse(JSON.stringify(x));
    _w[0] = _x;
    return _w;
  }
}

let curl27 = (arr, all) => {
  let w = W(arr);
  let _arr = paddingZero(arr, HASH_LENGTH);
  let x = cut(_arr, HASH_LENGTH);
  for (let i = 0; i < x.length; i++) {
    w = W(w, x[i]);
    w = cut(curl27f(uncut(w, HASH_LENGTH)), HASH_LENGTH);
  }
  if (all) return w;
  return w[0];
}


module.exports = { curl27 }