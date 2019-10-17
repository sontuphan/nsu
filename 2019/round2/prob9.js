let BN = require('bn.js');

let a = new BN(1909);
let b = new BN(401);
let c = new BN(2019);


for (let i = 0; i < 1000; i++) {
  let temp = a.pow(new BN(i)).mod(c);
  if (temp.mod(new BN(2)).eq(new BN(0))) {
    console.log(i, temp);
  }
}