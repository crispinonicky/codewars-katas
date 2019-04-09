//Very simple, given a number, find its opposite.

function opposite(number) {
  return number * -1
}

// You are going to be given a word. Your job is to return the middle character 
// of the word. If the word's length is odd, return the middle character. If the 
// word's length is even, return the middle 2 characters.

function getMiddle(s){

  if (s.length % 2 == 0){
    return (s[Math.floor(s.length/2) - 1] + s[Math.floor(s.length/2)])
  } else {
    return s[Math.ceil(s.length/2) - 1]
  }
  
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for
// different data types.

function findShort(s){


  let shortest = 99999
  let array = s.split(" ")
  
  for (i = 0; i < array.length; i++){
    if (array[i].length < shortest) {
      shortest = array[i].length
    }
  }
  
  return shortest
//   console.log(array)
  
}

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

  