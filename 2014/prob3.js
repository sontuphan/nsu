// let CIPHER = 'O E H L L'.split(' ');
let CIPHER = 'R O L E L I S E O E E E H T O M V C P B D E F S O N'.split(' ');
// let NOTATION = 'mi re mi re mi'.split(' ');
let NOTATION = 'mi re mi re mi ti re do la do mi la ti mi sol ti do mi mi re mi re mi ti re do'.split(' ');

let N = 26;

let GROUPS = {};
for (let index = 0; index < N; index++) {
  let letter = CIPHER[index];
  let note = NOTATION[index];
  if (!GROUPS[note]) GROUPS[note] = [];
  GROUPS[note].push({ letter, index });
}

let DATA = Object.keys(GROUPS).map(key => GROUPS[key]);

let merge = matrix => {
  let re = []
  matrix.forEach(row => {
    row.forEach(entry => {
      re[entry.index] = entry.letter;
    });
  });
  return re.join('');
}

let singleShift = row => {
  let tempLetters = [];
  let tempIndice = [];
  row.forEach(entry => {
    tempLetters.push(entry.letter);
    tempIndice.push(entry.index);
  });
  let tempShiftedLetter = [];
  tempLetters.forEach((letter, index) => {
    tempShiftedLetter[(index + 1) % tempLetters.length] = letter;
  });
  return tempIndice.map((index, i) => ({ letter: tempShiftedLetter[i], index }));
}

let multipleShift = (row, times) => {
  let re = JSON.parse(JSON.stringify(row));
  for (i = 1; i <= times; i++) {
    re = singleShift(re);
  }
  return re
}

let core = (row, callback) => {
  for (let i = 0; i < row.length; i++) {
    callback(multipleShift(row, i));
  }
}

let TOTAL = [];
core(DATA[0], row => {
  let permuatation = [row];
  core(DATA[1], row => {
    permuatation.push(row);
    core(DATA[2], row => {
      permuatation.push(row);
      core(DATA[3], row => {
        permuatation.push(row);
        core(DATA[4], row => {
          permuatation.push(row);
          core(DATA[5], row => {
            permuatation.push(row);
            TOTAL.push(merge(permuatation));
          });
        });
      });
    });
  });
});

let activeFilter = conditions => {
  conditions.forEach(substring => {
    TOTAL = TOTAL.filter(string => string.includes(substring));
  });
  return TOTAL
}

let passiveFilter = conditions => {
  conditions.forEach(substring => {
    TOTAL = TOTAL.filter(string => !string.includes(substring));
  });
  return TOTAL
}

activeFilter(['COMPOSED']) // search pattern THE -> COMPOSED
passiveFilter([])

console.log(TOTAL) // L'BEETHOVEN COMPOSED FOR ELISE
