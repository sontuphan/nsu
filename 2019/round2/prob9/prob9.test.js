const BN = require('bn.js');

let A = new BN(1909);
let B = new BN(401);
let C = new BN(2019);

let p1 = new BN(2);
let p2 = new BN(22);
let p3 = new BN(222);
let p4 = new BN(2222);

let f = y => {
  return y.pow(new BN(5)).add(A.mul(y.pow(new BN(3)))).add(B.mul(y)).umod(C);
}

let algorithm = y => {
  let S1 = y;
  let S2 = S1.mul(S1);
  let S3 = S2.mul(S2);
  let S4 = p1;
  let S5 = p2;
  let S6 = p3;
  let S7 = p4;
  let S8 = S4.mul(S5);
  let S9 = S4.mul(S8);
  let S10 = S5.mul(S2);
  let S11 = S9.mul(S2);
  let S12 = S4.sub(S6);
  let S13 = S12.sub(S7);
  let S14 = S3.sub(S10);
  let S15 = S14.sub(S11);
  let S16 = S15.sub(S13);
  let S17 = S16.sub(S5);
  let S18 = S1.mul(S17);
  return S18.umod(C);
}

for (let i = 0; i < 2223; i++) {
  let y = new BN(i);
  let _f = f(y);
  let _a = algorithm(y);
  if (!_f.eq(_a)) return console.log(y.toString(), _f.toString(), _a.toString());
  if (_f.toString() !== _a.toString()) return console.log(y.toString(), _f.toString(), _a.toString());
}

console.log('Done!')