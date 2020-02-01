// Pirates have notorious difficulty with enunciating. 
// They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates
// are saying.

// Write a function that will accept a jumble of letters as well 
// as a dictionary, and output a list of words that the pirate might 
// have meant.

function grabscrab(anagram, dictionary) {
  
  let words = [];
    
  for (let i = 0; i < dictionary.length; i++) {
    anagram.split("").sort().join("") === dictionary[i].split("").sort().join("") ? 
    words.push(dictionary[i]) : 0;
  }
  
  return words;
  
}