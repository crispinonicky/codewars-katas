// Simple fun: House numbers

function houseNumbersSum(inputArray) {
    
  let counter = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
  
    counter += inputArray[i];
    
    if (inputArray[i] === 0) {
      return counter;
    }
    
  }
  
}