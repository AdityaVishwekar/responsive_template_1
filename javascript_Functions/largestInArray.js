function largestOfFour(arr) {
  // You can do this!
  var largest = 0;
  for (var i = 0; i < arr.length; i++) {
    largest = 0; 
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > largest)
        largest = arr[i][j];
    }
    arr[i] = largest; 
  }
  console.log("Largest in sub-arrays:- "+arr);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
