function squareSum(numbers){

  numbers.unshift(0);
  
  return numbers.length === 0 ? 0 : numbers.reduce((a,b) => {
    return a + b ** 2;
  })
  
}