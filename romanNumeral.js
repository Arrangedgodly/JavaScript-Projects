function convertToRoman(num) {
  let arr = [];
  let str = "";
  let one = /I/g;
  let five = /V/g;
  let ten = /X/g;
  let fifty = /L/g;
  let hundred = /C/g;
  let test = [one, five, ten, fifty, hundred];
  while (num > 0) {
    while (num > 1000) {
      num -= 1000;
      arr.push("M");
    }
    while (num > 500) {
      num -= 500;
      arr.push("D");
    }
    while (num > 100) {
      num -= 100;
      arr.push("C");
    }
    while (num > 50) {
      num -= 50;
      arr.push("L");
    }
    while (num > 10) {
      num -= 10;
      arr.push("X");
    }
    while (num > 5) {
      num -= 5;
      arr.push("V");
    }
    num -= 1;
    arr.push("I");
  }
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

console.log(convertToRoman(9999));
