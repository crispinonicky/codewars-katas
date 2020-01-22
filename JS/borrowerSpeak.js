// Borrower Speak

function borrow(s){

  let solution = "";
  
  for (let i = 0; i < s.length; i++) {
    (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) || 
    (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ?
    solution += s[i].toLowerCase() : 0;
  }
  
  return solution;
  
}