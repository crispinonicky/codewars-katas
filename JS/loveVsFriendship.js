// Love vs Friendship

function wordsToMarks(string){

  let solution = 0;
  
  for (let i = 0; i < string.length; i++) {
    solution += string[i].charCodeAt() - 96
  }
  
  return solution;
  
}