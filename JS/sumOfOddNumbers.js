// Sum of Odd Numbers

function rowSumOddNumbers(n) {
  
  let firstNum = n ** 2 - (n - 1);
  let sum = 0;
    
  for (let i = 0; i < n * 2; i+=2) {
    sum += firstNum + i;
  }
  
  return sum;
  
}