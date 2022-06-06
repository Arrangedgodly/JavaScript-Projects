function convertToRoman(num) {
  let arr = [];
  let str = "";
  while (num > 0) {
    while (num >= 1000) {
      num -= 1000;
      arr.push("M");
    }
    while (num >= 900) {
      num -= 900;
      arr.push("CM")
    }
    while (num >= 800) {
      num -= 800;
      arr.push("DCCC")
    }
    while (num >= 700) {
      num -= 700;
      arr.push("DCC")
    }
    while (num >= 600) {
      num -= 600;
      arr.push("DC")
    }
    while (num >= 500) {
      num -= 500;
      arr.push("D");
    }
    while (num >= 400) {
      num -= 400;
      arr.push("CD");
    }
    while (num >= 100) {
      num -= 100;
      arr.push("C");
    }
    while (num >= 90) {
      num -= 90;
      arr.push("XC");
    }
    while (num >= 80) {
      num -= 80;
      arr.push("LXXX");
    }
    while (num >= 70) {
      num -= 70;
      arr.push("LXX");
    }
    while (num >= 60) {
      num -= 60;
      arr.push("LX");
    }
    while (num >= 50) {
      num -= 50;
      arr.push("L");
    }
    while (num >= 40) {
      num -= 40;
      arr.push("XL");
    }
    while (num >= 10) {
      num -= 10;
      arr.push("X");
    }
    while (num >= 9) {
      num -= 9;
      arr.push("IX");
    }
    while (num >= 8) {
      num -= 9;
      arr.push("VIII");
    }
    while (num >= 7) {
      num -= 7;
      arr.push("VII");
    }
    while (num >= 6) {
      num -= 6;
      arr.push("VI");
    }
    while (num >= 5) {
      num -= 5;
      arr.push("V");
    }
    while (num >= 4) {
      num -= 4;
      arr.push("IV");
    }
    while (num >= 1) {
    num -= 1;
    arr.push("I");
    }
  }
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  console.log(arr);
  console.log(str);
  return str;
}

console.log(convertToRoman(68));
