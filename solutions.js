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

// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to 
// know how many years 'Y' this sum has to be kept in the bank in order for this sum 
// of money to amount to 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, 
// and the new sum is re-invested yearly after paying tax 'T'

// Note that the principal is not taxed but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
   
  let counter = 0
  
  while (principal < desired){
    principal = principal + (principal * interest) - (principal * interest * tax)
    counter++
  }
  
  return counter
  
}

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, 
// you need to return it.

function sortArray(array) {
  
  let oddsArr = []
  
  for (i = 0; i < array.length; i++){
    if (array[i] % 2 == 1){
      oddsArr.push(array[i])
      array[i] = " "
    }
  }
  
  console.log(array)
  
  oddsArr.sort(function (a,b) {return a - b})
  
  
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

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except 
// for the last two names, which should be separated by an ampersand.

function list(names){

  if (names.length == 1){
    return names[0].name
  } else if (names.length == 2){
    return names[0].name + ' & ' + names[1].name
  } else if (names.length === 0){
    return ''
  }
  
  let nameStr = ''
  
  for (i = 0; i < names.length; i++) {
    if (i == names.length - 1){
      return (nameStr + "& " + names[i].name)
    } else if (i === names.length - 2){
      nameStr = nameStr + names[i].name + " "
    } else {
    nameStr = nameStr + names[i].name + ", "
    }
  }
  
  console.log(nameStr)

  console.log(names.length)
}

// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

function highAndLow(numbers){

  let numArr = numbers.split(" ").sort(function(a,b) {return a - b})
  
  
  return(numArr[numArr.length - 1] + " " + numArr[0])
  
  
}



