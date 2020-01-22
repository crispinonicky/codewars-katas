// In this example you have to validate if a user input string is alphanumeric. The given string is not
// nil, so you don't have to check that.

function alphanumeric(string){

  if (string === "") {
    return false
  }
  
  console.log(string)
  
  let strArray = string.split("")
  
  console.log(strArray)
  
  for (i = 0; i < string.length; i++){
  console.log(string.charCodeAt(i))
    if (string.charCodeAt(i) < 48){
      return false
    } else if (string.charCodeAt(i) > 122){
      return false
    } else if (string.charCodeAt(i) > 57 && string.charCodeAt(i) < 65){
      return false
    } else if (string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97){
      return false
    } 
  }
  
  return true
  
}