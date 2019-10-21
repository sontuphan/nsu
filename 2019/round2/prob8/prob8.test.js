
let FRAGMENT = "Alice has read an interesting book and would like to share her enthusiasm with Bob! Alice sent a short fragment from the book to Bob. Due to the characteristics of the communication channel used, she divided the text into two parts and sent them separately. In the first part, she placed all of the 16 consonants that occurred in this fragment;";
FRAGMENT = FRAGMENT.toLocaleLowerCase().split('');
let stat = {};
FRAGMENT.forEach(element => {
  if (!stat[element]) stat[element] = 0;
  stat[element] = stat[element] + 1;
});

console.log(stat);