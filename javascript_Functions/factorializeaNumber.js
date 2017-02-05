
function factorialize(num) {
  if ( num === 0) {
    return 1;
  }
  for (var i = num-1; i > 0; i--) {
    num = num * i;
  }
  return num;
}

console.log("Factorial of 5 :- "+factorialize(5));