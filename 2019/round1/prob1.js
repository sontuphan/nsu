let ciphertext = [1, 2, 3, 2, 4, 5, 0, 6, 7, 0, 1, 0, 7, 8, 9, 10, 5, 11, 0, 7, 12, 13, 6, 5, 14, -1, 15, 16, 8, 5, 0, 8, 17, 8, 13, 18, -1, 19, 8, 1, 20, -1, 6, 7, 0, 1, 0, 20, 19, 10, 15, 8, 13]

let hint = 'Autumn, leaves,colors... will insprire everyone!';

let plaintext = ''

ciphertext.forEach(item => {
  if (item == -1) return plaintext += '\n';
  if (item == 0) return plaintext += ' ';

  if (item == 1) return plaintext += 'a';
  if (item == 2) return plaintext += 'u';
  if (item == 3) return plaintext += 't';
  if (item == 4) return plaintext += 'm';
  if (item == 5) return plaintext += 'n';

  if (item == 6) return plaintext += 'i';
  if (item == 7) return plaintext += 's';

  if (item == 8) return plaintext += 'e';
  // if (item == 9) return plaintext += item;
  if (item == 10) return plaintext += 'o';

  if (item == 12) return plaintext += 'p';
  if (item == 13) return plaintext += 'r';
  if (item == 14) return plaintext += 'g';

  if (item == 15) return plaintext += 'w';
  if (item == 16) return plaintext += 'h';
  // if (item == 17) return plaintext += item;
  // if (item == 18) return plaintext += item;
  if (item == 19) return plaintext += 'l';
  if (item == 20) return plaintext += 'f';

  plaintext += item;
})

console.log(plaintext);