/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
*/
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  var string2 = [];
  string2 = arr[1].split('');
  for(var i = 0; i < string2.length; i++) {
    if( arr[0].indexOf(string2[i]) == -1) {
      return false;
    }
  }
  return true;
}

console.log("mutation :- "+mutation(["hello", "hey"]));