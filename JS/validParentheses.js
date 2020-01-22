// Write a function called that takes a string of parentheses, and determines 
// if the order of the parentheses is valid. The function should return true if 
// the string is valid, and false if it's invalid.

function validParentheses(parens){

  if (parens[0] === ")" || parens[parens.length - 1] == "(") {
    return false
  }
  
  let parenCounter = 0
  
  for (i = 0; i < parens.length; i++) {

    parens[i] == "(" ? parenCounter++ : parenCounter--;
    
  }

  return parenCounter == 0 ? true : false;

}

// Version 2

function validParentheses(parens){

  if (parens[0] === ")" || parens[parens.length - 1] == "(") {
    return false
  } 
  
  let parenCounter = 0
  
  for (i = 0; i < parens.length; i++) {

    parens[i] == "(" ? parenCounter++ : parenCounter--;
     
  }
   
  if (parenCounter === 0){
    return true
  } else {
    return false
  }

}