var fibonacciArray = require('./../js/math.js').fibonacciModule;

describe('Numbers', function() {
  it('should initialize the array of Fibonacci numbers', function() {
    var arrayRequired = [1,2,3,5,8,13,21,34];
    expect(fibonacciArray).toContain(arrayRequired);
  });
});
