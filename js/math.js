function fibonacciSum() {
  var initArray = [1,2];
  for (var i = 3, var newNum = 0; newNum <= 4000000; i++) {
      newNum = initArray[i - 2] + initArray[i - 3];
        initArray.push(newNum);
  }
  return initArray;
}
