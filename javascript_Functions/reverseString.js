function reverseString(str) {
  str = str.split("");
  str.reverse();
  str = str.join("");
  return str;
}
console.log("Reverse of Hello is "+reverseString("hello"));