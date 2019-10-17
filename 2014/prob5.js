let NUMBER = 22673;

let invertArr = arr => {
  let temp = JSON.parse(JSON.stringify(arr));
  let re = [];
  while (temp.length) re.push(temp.pop());
  return re;
}

let num2Arr = arr => {
  return invertArr(arr.toString().split('').map(item => parseInt(item)));
}

let arr2Num = arr => {
  return parseInt(invertArr(arr).join(''));
}

let sumArr = arr => {
  return arr.reduce((total, num) => total + num, 0);
}

let encrypt = num => {
  let arrNum = num2Arr(num);
  let invArrNum = invertArr(arrNum);
  return 2 * sumArr(arrNum) + arr2Num(invArrNum);
}


console.log(encrypt(NUMBER))
