function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num <= 0) {
    return "";
  } else if (num == 1) {
    console.log(str);
    return str;
  } else {
    for (let i = 0; i < num; i++) {
      newStr += str;
      console.log(newStr);
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", 0);
