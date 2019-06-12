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


// Move the first letter of each word to the end of it, then add "ay" to the end
// of the word. Leave punctuation marks untouched.


function pigIt(str){
  
  let wordArr = str.split(" ")
  
//   console.log(wordArr)
  
  let map1 = wordArr.map(x => x.substring(1, x.length) +  x[0] + 'ay');
  
  
  for (i = 0; i < map1.length; i++) {
    if (map1[i].length === 3 && (map1[i][0] !== 'o')){
      console.log(map1[0][0])
      map1[i] = map1[i][0]
    } 
  }
  
  for (i = 0; i < map1.length; i++) {
    if (map1[i] === "O") {
      map1[i] = "Oay"
    }
  }
  
  console.log(map1)
  
  return map1.join(" ")
  
}

// Write a function, which takes a non-negative integer (seconds) as input and 
// returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
  

  hours = (Math.floor(seconds/3600)).toString()
  mins = (Math.floor(((seconds/3600) - hours) * 60)).toString()
  secs = (seconds % 60).toString()
  
  console.log(hours)
  console.log(mins)
  console.log(secs)
  
  if (hours.length === 1){
    hours = "0" + hours
  }
  
  if (mins.length === 1){
    mins = "0" + mins
  }
  
  if (secs.length === 1){
    secs = "0" + secs
  }

return(hours +":" + mins + ":" + secs)
  
}

// Write a function called that takes a string of parentheses, and determines 
// if the order of the parentheses is valid. The function should return true if 
// the string is valid, and false if it's invalid.

function validParentheses(parens){

  if (parens[0] === ")" || parens[parens.length - 1] == "(") {
    return false
  }
  
  let parenCounter = 0
  
  for (i = 0; i < parens.length; i++) {
    if (parens[i] == "(") {
      parenCounter++
    } else {
      parenCounter--
    }
    
  }
  
  if (parenCounter === 0){
    return true
  } else {
    return false
  }


}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string 
// of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  
  let strArr = numbers
  
  for (i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toString()
  }
  
//   console.log(strArr)
  
  strArr[0] = "(" + strArr[0]
  
  strArr[2] = strArr[2] + ") "
  
  console.log(strArr)
  
  strArr[5] = strArr[5] + "-"
  
  let final
  
  for (i = 0; i < strArr.length; i++){
    final += strArr[i]
  }
  
//   return final  
    
  return final.slice(9)
}

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving 
// the order of the other elements.

var moveZeros = function (arr) {
  
  let nonZero = arr.filter(item => item !== 0)
  let zeros = arr.filter(item => item === 0) 
  
  console.log(nonZero)
  
  return(nonZero.concat(zeros))
  
}

// In this example you have to validate if a user input string is alphanumeric. The given string is not
// nil, so you don't have to check that.

function alphanumeric(string){

  if (string === "") {
    return false
  }
  
  console.log(string)
  
  let strArray = string.split("")
  
  console.log(strArray)
  
  for (i = 0; i < string.length; i++){
  console.log(string.charCodeAt(i))
    if (string.charCodeAt(i) < 48){
      return false
    } else if (string.charCodeAt(i) > 122){
      return false
    } else if (string.charCodeAt(i) > 57 && string.charCodeAt(i) < 65){
      return false
    } else if (string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97){
      return false
    } 
  }
  
  return true
  
}

// Find the number of divisors of a positive integer n.

function getDivisorsCnt(n){

  let o = n;
  let total = 0; 
  
  while(o > 0){
   if(n%o === 0){
     total++
   }
   o--;
  }
  return total;
 }

// Your task in order to complete this Kata is to write a function which formats
// a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns
// "now". Otherwise, the duration is expressed as a combination of years, days, 
// hours, minutes and seconds.

function formatDuration (seconds) {
  
  if (seconds === 0) {
    return "now"
  }
  
  let secs = seconds % 60
  let mins = Math.floor(seconds/60) % 60
  let hours = Math.floor(seconds/3600) % 24
  let days = Math.floor(seconds/86400) % 365
  let years = Math.floor(seconds/(86400 * 365))
  
  let timeArr = [years, days, hours, mins, secs]
  
  console.log(timeArr)
  
//   let finalArr = timeArr.filter(x => x > 0)
  
  if (timeArr[4] === 1){
    timeArr[4] = timeArr[4] + " second"
  } else {
    timeArr[4] = timeArr[4] + " seconds"
  }
  
  if (timeArr[3] === 1){
    timeArr[3] = timeArr[3] + " minute"
  } else {
    timeArr[3] = timeArr[3] + " minutes"
  }
  
  if (timeArr[2] === 1){
    timeArr[2] = timeArr[2] + " hour"
  } else {
    timeArr[2] = timeArr[2] + " hours"
  }
  
  if (timeArr[1] === 1){
    timeArr[1] = timeArr[1] + " day"
  } else {
    timeArr[1] = timeArr[1] + " days"
  }
  
  if (timeArr[0] === 1){
    timeArr[0] = timeArr[0] + " year"
  } else {
    timeArr[0] = timeArr[0] + " years"
  }
  
  for (i = timeArr.length - 1; i >= 0; i--){
    if (timeArr[i][0] == "0"){
      console.log("remove: " + timeArr[i])
      timeArr.splice(i, 1)
    } else {
      console.log("keep: " + timeArr[i])
    }
  }
  
  timeArr.reverse()
  
  console.log(timeArr)
  
//   console.log("Seconds: " + secs)
//   console.log("Minutes: " + mins)
//   console.log("Hours: " + hours)
//   console.log("Days: " + days)
//   console.log("Years: " + years)

  if (timeArr.length == 1){
    return timeArr[0]
  } else if (timeArr.length == 2){
    return timeArr[1] + " and " + timeArr[0]
  } else if (timeArr.length == 3){
    return timeArr[2] + ", " + timeArr[1] + " and " + timeArr[0]
  } else if (timeArr.length == 4){
    return timeArr[3] + ", " + timeArr[2] + ", " + timeArr[1] + " and " + timeArr[0]
  } else {
    return timeArr[4] + ", " + timeArr[3] + ", " + timeArr[2] + ", " + timeArr[1] + " and " + timeArr[0]    
  }

}

// This time no story, no theory. The examples below 
// show you how to write function accum:

function accum(s) {

  let strArr = s.split("")
  
  for (i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toUpperCase()
  }
  
  for (i = 0; i < strArr.length; i++) {
    let copy = strArr[i]
    for (j = 0; j < i; j++){
      strArr[i] = strArr[i].toLowerCase() + copy
    }
    strArr[i] = strArr[i].split("").reverse().join("")
  }
  
  let solution = ""
  
  for (i = 0; i < strArr.length; i++){
    if (i == strArr.length - 1){
      solution += strArr[i]
    } else {
    solution += strArr[i] + '-'
    }
  }
  
  return solution

}

// You are given an array strarr of strings and an integer k. Your task is to 
// return the first longest string consisting of k consecutive strings taken in 
// the array.

function longestConsec(strarr, k) {


  if (strarr.length === 0 || k > strarr.length || strarr.length <= 0) {
    return ""
  }
  
    let longestString = ""
    let stringArr = []
    let finalArr = []
      
      for (i = 0; i < strarr.length - k + 1; i++) {
        let currentWord = strarr[i]
        let j = 0
        while (j < k){
          stringArr.push(strarr[i])
          j++
          i++
        }
        stringArr.push("-")
        i = i - k
        j = 0
        finalArr.push(stringArr.join(""))
      } 
      
      let bigString = finalArr[finalArr.length - 1].slice(0, finalArr[finalArr.length - 1].length - 1)
       
      let solutionArr = bigString.split("-")
      
  //     console.log(solutionArr)
      
      for(i = 0; i < solutionArr.length; i++) {
        if (longestString.length < solutionArr[i].length){
          longestString = solutionArr[i]
        }
      }
      
      return longestString
      
  }

// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

  function solution(str, ending){

    let solution = ""
    
    for (i = str.length - 1; i > (str.length - 1) - ending.length; i--){
      console.log(str[i])
      solution = str[i] + solution
    }
    
  //   return solution
  
  if (solution === ending){
    return true
  } else {
    return false
  }
    
  }

//   Make a program that filters a list of strings and returns a list with only 
// your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has 
// to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// DONE IN PYTHON:

  def friend(x):

    final = []
    
    for i in x:
        if len(i) == 4:
            final.append(i)
            
    return final