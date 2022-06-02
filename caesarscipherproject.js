function rot13(str) {
  let newStr = "";
  let alph = /[A-Z]/;
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < str.length; i++) {
    if (alph.test(str[i]) == false) {
      newStr += str[i];
    }
    for (let j = 0; j < alphabet.length; j++) {
      if (j < 13) {
        if (str[i] == alphabet[j]) {
          newStr += alphabet[j + 13];
        }
      }
      if (j >= 13) {
        if (str[i] == alphabet[j]) {
          newStr += alphabet[j - 13];
        }
      }
    }
  }
  return newStr;
}
console.log(rot13("WHATS THE DIFFERENCE BETWEEN A KING AND A GOD"));
