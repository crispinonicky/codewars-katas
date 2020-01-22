// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

function highAndLow(numbers){
  
  let numArr = numbers.split(" ")
  
//   console.log(numArr)
  
  for (i = 0; i < numArr.length; i++){
    numArr[i] = parseInt(numArr[i])
  }
  
  
  numArr.sort(function(a, b){return a-b});
  
  console.log(numArr)
  
  return (numArr[numArr.length - 1] + " " + numArr[0])
  
}

// Version 2

function highAndLow(numbers){

  let numArr = numbers.split(" ").sort(function(a,b) {return a - b})
  
  
  return(numArr[numArr.length - 1] + " " + numArr[0])
  
  
}
