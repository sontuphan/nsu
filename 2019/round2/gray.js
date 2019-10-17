let decodeToDec = binaryString => {
  switch (binaryString) {
    case '0000':
      return 0;
    case '0001':
      return 1;
    case '0011':
      return 2;
    case '0010':
      return 3;
    case '0110':
      return 4;
    case '0111':
      return 5;
    case '0101':
      return 6;
    case '0100':
      return 7;
    case '1100':
      return 8;
    case '1101':
      return 9;
    case '1111':
      return 10;
    case '1110':
      return 11;
    case '1010':
      return 12;
    case '1011':
      return 13;
    case '1001':
      return 14;
    case '1000':
      return 15;
  }
}

let decodeToBin = binaryString => {
  switch (binaryString) {
    case '0000':
      return '0000';
    case '0001':
      return '0001';
    case '0011':
      return '0010';
    case '0010':
      return '0011';
    case '0110':
      return '0100';
    case '0111':
      return '0101';
    case '0101':
      return '0110';
    case '0100':
      return '0111';
    case '1100':
      return '1000';
    case '1101':
      return '1001';
    case '1111':
      return '1010';
    case '1110':
      return '1011';
    case '1010':
      return '1100';
    case '1011':
      return '1101';
    case '1001':
      return '1110';
    case '1000':
      return '1111';
  }
}

module.exports = { decodeToDec, decodeToBin };