// Row of the odd triangle

function oddRow(n) {  

  let firstNum = n ** 2 - (n - 1);
  let nums = [];
    
  for (let i = 0; i < n * 2; i+=2) {
    nums.push(firstNum + i);
  }
  
  return nums;
  
}