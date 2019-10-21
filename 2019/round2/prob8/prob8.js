const hamming = require('./hamming-by-matrix');
const gray = require('./gray');
const hexToBinary = require('hex-to-binary');
const { cut, uncut } = require('../prob5/utils');

const PART1 = '66674C36666F43D3C199900AA1AA325992A67A59D9B4A8B69330D1BC000153367A5E33D30E6692D0F349D3321FFFF0ED706667A7F670D999679F4AA67561BA679B4AA54F34D5AB0F4AACCF000055CE633670D9DA54CE37F660DE19CD995335495523CCAAA8F1E0332586CF48A98CD9B387FD9D546A99E9D2000333201513FE5B4AA00CCCE9667554CD2CCCB3330F32A666553CD756AC3E0674E9D369E1DC6A9999780007F00961E66465519FEA8B2514CCCB332AA63332CCCE6D2A99AACCCC004'
const PART2 = '66CA61967319CCD2CE76998CE6433332D19B46784C65334E999A402ADA0265A99A663333319B32D3299698CCC96986619967134CCB4CE23333334CC6730CE90170CCCD2CE669996A61999EA63332CCA4C3332D4CD3334CCD3319994730CCCD3A6669D96A66999699B398640CC86CE619676AD4CD3308999866D3379321C33210B4C6732199B53218019A404CD2DE65A986663398CCCCCB5319CC6665997B96A63398CD9CCD2CD9A399A6633986661998CD9CC325A6339CCE619998C04C66CE633996A61998CF66967334CC66CA6199865E00'
let HINT = [22, 19, 3, 3, 36, 53, 3, 33, 20, 28];

let part1 = hexToBinary(PART1).split('').map(item => parseInt(item));
let part2 = hexToBinary(PART2).split('').map(item => parseInt(item));

let CONSONANT = cut(part1, 7);
let VOWEL_PUNCTUATION = cut(part2, 7);


let decodedConsonant = [];
let consonantStat = {};
for (let i = 0; i < CONSONANT.length; i++) {
  let decode = gray.decodeToDec(hamming.recovery(CONSONANT[i]).join(''));
  decodedConsonant.push(decode);
  if (!consonantStat[decode]) consonantStat[decode] = 0;
  consonantStat[decode] = consonantStat[decode] + 1;
}
console.log(consonantStat)

let decodedVowelPunctuation = [];
let vowelPunctuationStat = {};
for (let i = 0; i < VOWEL_PUNCTUATION.length; i++) {
  let decode = gray.decodeToDec(hamming.recovery(VOWEL_PUNCTUATION[i]).join(''));
  decodedVowelPunctuation.push(decode);
  if (!vowelPunctuationStat[decode]) vowelPunctuationStat[decode] = 0;
  vowelPunctuationStat[decode] = vowelPunctuationStat[decode] + 1;
}
console.log(vowelPunctuationStat)


// Cryptanalize Part 1
console.log('Consonants:', decodedConsonant.length)
let counter = 0;
decodedConsonant = decodedConsonant.map(item => {
  let re = null;
  counter = counter + 1;
  if (item == 0) re = 'r'; // 15 times
  if (item == 1) re = 's'; // 24
  if (item == 2) re = '(2)'; // 19
  if (item == 3) re = 'n'; // 30
  if (item == 4) re = '(4)'; // 13
  if (item == 5) re = '(5)'; // 2
  if (item == 6) re = '(6)'; // 4
  if (item == 7) re = '(7)'; // 6
  if (item == 8) re = '(8)'; // 8
  if (item == 9) re = '(9)'; // 7
  if (item == 10) re = '(10)'; // 8
  if (item == 11) re = '(11)'; // 5
  if (item == 12) re = '(12)'; // 5
  if (item == 13) re = 't'; // 46
  if (item == 14) re = 'h'; // 24
  if (item == 15) re = '(15)'; // 4

  if (counter == HINT[0]) {
    re = re + ' *\n';
    HINT.shift();
    counter = 0;
  }
  return re;
});

console.log(decodedConsonant.join(' '));

// Cryptanalize Part 2
console.log('Vowels, a space, a hyphen, punctations:', decodedVowelPunctuation.length)
// a e u o i y
decodedVowelPunctuation = decodedVowelPunctuation.map(item => {
  if (item == 0) return '.\n'; // 9 times
  if (item == 1) return 'i'; // 26
  if (item == 2) return 'y'; // 9
  if (item == 3) return ' '; // 1
  if (item == 7) return 'a'; // 85
  if (item == 8) return '!'; // 2
  if (item == 11) return ','; // 7
  if (item == 12) return 'u'; // 17
  if (item == 13) return 'e'; // 50
  if (item == 14) return 'o'; // 33
  if (item == 15) return '-'; // 1
});

console.log(decodedVowelPunctuation.join(' '));
