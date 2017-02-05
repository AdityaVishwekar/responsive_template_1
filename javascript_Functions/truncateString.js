function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num) {
    if (num > 3) {
    str = str.slice(0,num-3);
    str = str.concat("...");
    }
    else {
      str = str.slice(0,num);
      str = str.concat("...");
    }
  }
  return str;
}

console.log("Truncated String :- "+truncateString("A-tisket a-tasket A green and yellow basket", 11));
