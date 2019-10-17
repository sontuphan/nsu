
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