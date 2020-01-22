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