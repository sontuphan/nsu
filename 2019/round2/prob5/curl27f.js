const { cut, uncut, mod } = require('./utils');

let F = ([a, b, c]) => {
  let a2 = mod(a ** 2);
  let b2 = mod(b ** 2);
  let c2 = mod(c ** 2);
  return mod((
    a2 * b2 * c + a2 * b * c2 - a * b2 * c2
    + a2 * b2 - a2 * b * c + a2 * c2 + a * b2 * c
    - a2 * c + a * b2 - a * c2 + b2 * c + b * c2
    - a2 - b2 + b * c - c2
    - c
    + 1
  ));
}

let S = ([a, b, c]) => {
  return [F([a, b, c]), F([b, c, a]), F([c, a, b])];
}

// let range = [0, 1, -1];
// for (let i = 0; i < 27; i++) {
//   let i1 = i % 3;
//   let i2 = Math.floor(i / 3) % 3;
//   let i3 = Math.floor(i / 9) % 3;
//   let input = [range[i1], range[i2], range[i3]];
//   let output = S(input)
//   if (input[1] == output[1] && input[2] == output[2])
//     console.log(input, output);
// }

let group = (arr, length) => {
  let _arr = JSON.parse(JSON.stringify(arr));
  let re = [];
  while (_arr.length) {
    let group1 = _arr.shift();
    let group2 = _arr.shift();
    let group3 = _arr.shift();
    let newGroup1 = []; let newGroup2 = []; let newGroup3 = [];
    for (let i = 0; i < length; i++) {
      [s1, s2, s3] = S([group1[i], group2[i], group3[i]]);
      newGroup1.push(s1); newGroup2.push(s2); newGroup3.push(s3);
    }
    re.push(newGroup1); re.push(newGroup2); re.push(newGroup3);
  }
  return uncut(re, length);
}

let calculateAtRound = (arr, index) => {
  let _arr = JSON.parse(JSON.stringify(arr));
  let length = index == 1 ? 243 : index == 2 ? 81 : index == 3 ? 27 : index == 4 ? 9 : index == 5 ? 3 : 1;
  _arr = cut(_arr, length);
  _arr = group(_arr, length);
  return _arr;
}

let curl27f = arr => {
  let data = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < 27; i++) {
    for (let j = 0; j < 6; j++) {
      data = calculateAtRound(data, j + 1);
    }
  }
  return data;
}

module.exports = { curl27f }
