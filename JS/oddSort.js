// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, 
// you need to return it.

function sortArray(array) {
  
  let oddsArr = [];
  
  for (i = 0; i < array.length; i++){
    if (array[i] % 2 == 1){
      oddsArr.push(array[i]);
      array[i] = " ";
    }
  }
    
  oddsArr.sort(function (a,b) {return a - b});
  
  for (i = 0; i < array.length; i++){
    if (array[i] === ' '){
      array.splice(i, 1, oddsArr[0])
      oddsArr.shift()
    }
  }
  
//   for (i = 0; i < array.length; i++){
//     if (array[i] == undefined){
//       array[i] = 0  
//     }
//   }
  
//   console.log(oddsArr)
  
//   console.log(array)
  return array
  
}