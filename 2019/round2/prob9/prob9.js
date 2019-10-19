const BN = require('bn.js');

let A = new BN(1909);
let B = new BN(401);
let C = new BN(2019);

let p1 = new BN(2);
let p2 = new BN(22);
let p3 = new BN(222);
let p4 = new BN(2222);

let f = (a, b, c, d, X) => { // factorize X = 2*a + 22*b + 222*c + 2222*d mod 2019
  let m1 = p1.mul(a);
  let m2 = p2.mul(b);
  let m3 = p3.mul(c);
  let m4 = p4.mul(d);

  if (m1.add(m2).add(m3).add(m4).umod(C).eq(X)) return [a.toString(), b.toString(), c.toString(), d.toString()];
  return null;
}

let range = [
  new BN(-5), new BN(-4), new BN(-3), new BN(-2), new BN(-1),
  new BN(0),
  new BN(1), new BN(2), new BN(3), new BN(4), new BN(5),
]
let n = range.length;

console.log('Factorize: 1909');
for (let i = 0; i < n ** 4; i++) {
  let i1 = range[Math.floor(i / (n ** 0)) % n];
  let i2 = range[Math.floor(i / (n ** 1)) % n];
  let i3 = range[Math.floor(i / (n ** 2)) % n];
  let i4 = range[Math.floor(i / (n ** 3)) % n];
  let _g = f(i1, i2, i3, i4, A);
  if (_g) console.log(_g);
}
console.log('Factorize: 401');
for (let i = 0; i < 14641; i++) {
  let i1 = range[Math.floor(i / (n ** 0)) % n];
  let i2 = range[Math.floor(i / (n ** 1)) % n];
  let i3 = range[Math.floor(i / (n ** 2)) % n];
  let i4 = range[Math.floor(i / (n ** 3)) % n];
  let _h = f(i1, i2, i3, i4, B);
  if (_h) console.log(_h);
}
console.log('Done!');