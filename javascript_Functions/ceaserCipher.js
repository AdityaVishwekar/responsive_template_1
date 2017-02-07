function rot13(str) { // LBH QVQ VG!
// split str into char array
  return str.split('')
  // Iterate over each character in array
  .map.call(str, function(char) {
    // Convert character into ascii value
    var x = char.charCodeAt(0);
    // Check whether it lies from A-Z
    if( x < 65 || x > 90) {
      return String.fromCharCode(x); // Return unconverted
    }
    
    // Check whether it lies from A-M
    if( x < 78) {
      return String.fromCharCode(x+13); // Convert Cipher text
    }
    
    // Check whether it lies from N-Z
    if( x > 77) {
      return String.fromCharCode(x-13); // Convert Cipher test
    }
  }).join('');
} 

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));