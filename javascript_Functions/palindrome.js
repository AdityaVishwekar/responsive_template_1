function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  var re = /[\W_]/g;
  str = str.replace(re,'');
  var input = str.split("");
  input.reverse();
  if (str == input.join(""))
    return true;
  else
    return false;
}

console.log("Palindrome :- "+palindrome("eye"));