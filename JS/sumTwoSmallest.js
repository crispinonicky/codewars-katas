// Create a function that returns the sum of the two lowest positive 
// numbers given an array of minimum 4 integers. No floats or empty 
// arrays will be passed.

function sumTwoSmallestNumbers(numbers) { 

  let small1 = 9999999999
  let small2 = 9999999999
   
   for (i = 0; i < numbers.length; i++) {
     if (numbers[i] < small1){
       small1 = numbers[i]
     }
     
   }
   
  //  console.log(small1)
  //  console.log(small2)
   
   for (i = 0; i < numbers.length; i++){
     if(numbers[i] < small2 && numbers[i] != small1){
       small2 = numbers[i]
       }
   }
   
   
   return small1 + small2
   
   
  };