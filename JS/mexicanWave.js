// Mexican Wave

function wave(str){

  let solution = [];
    
  for (let i = 0; i < str.length; i++) {
    str[i] == " " ?
    0 : 
    solution.push(
    str.substr(0, i) + 
    str[i].toUpperCase() + 
    str.substr(i + 1, str.length - 1)
    ); 
  }
  
  return solution;
  
}