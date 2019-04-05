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

