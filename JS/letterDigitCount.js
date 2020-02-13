function countLettersAndDigits(input) {

  let solution = 0;
  
  for (let i = 0; i < input.length; i++) {
  
    (input.toUpperCase().charCodeAt(i) >= 48 && 
    input.toUpperCase().charCodeAt(i) <= 57) ||
    (input.toUpperCase().charCodeAt(i) >= 65 && 
    input.toUpperCase().charCodeAt(i) <= 90) ?
    solution++ :
    0;
 
  }
  
  return solution;
  
}