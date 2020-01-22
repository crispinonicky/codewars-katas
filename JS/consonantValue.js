// Consonant Value

function solve(s) {

  let score = 0;
  let scoreArr = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
      scoreArr.push(score);
      score = 0; 
    } else {
      score += (s.charCodeAt(i) - 96)
    }
//     console.log(s[i] + " has a value of " + (s.charCodeAt(i) - 96))
  }
  
//   console.log(scoreArr);
  
  let solution = 0;
  
  for (i = 0; i < scoreArr.length; i++) {
    if (scoreArr[i] > solution) {
      solution = scoreArr[i];
    }
  } 
  
  return solution;
   
};