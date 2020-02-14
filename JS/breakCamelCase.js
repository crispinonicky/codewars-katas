function solution(string) {

  let solution = "";
  
  for (let i = 0; i < string.length; i++) {
    
    string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ?
    solution += " " + string[i] :
    solution += string[i];
    
  }
  
  return solution;
      
}
