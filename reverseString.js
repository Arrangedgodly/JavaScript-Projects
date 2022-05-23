function reverseString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[str.length - (1 + i)];
    console.log(newStr);
  }
  return newStr;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
