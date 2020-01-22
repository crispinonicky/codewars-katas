// Even odd warmup

function oddOrEven(array) {
  
  if (array.length === 0) {
    return 'even';
  }
  
  let solution = array.reduce((total, currentValue) => {
    return Math.abs(total + currentValue);
  });
      
  return solution % 2 === 0 ? 'even' : 'odd';
   
}