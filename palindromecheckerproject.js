function palindrome(str) {
  let newStr = "";
  console.log(newStr);
  let replaced = str.replace(/[^a-z0-9]/gi, "");
  console.log(replaced);
  for (let i = 0; i < replaced.length; i++) {
    newStr = newStr + replaced[replaced.length - (1 + i)];
    console.log(newStr);
  }
  if (replaced.toLowerCase() === newStr.toLowerCase()) {
    console.log(replaced.toLowerCase() === newStr.toLowerCase());
    return true;
  } else {
    console.log(replaced.toLowerCase() === newStr.toLowerCase());
    return false;
  }
}

palindrome("__e ye");
palindrome("_!fsafe ye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("My age is 0, 0 si ega ym.");
