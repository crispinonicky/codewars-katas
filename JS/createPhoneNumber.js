// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string 
// of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  
  let strArr = numbers
  
  for (i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toString()
  }
  
//   console.log(strArr)
  
  strArr[0] = "(" + strArr[0]
  
  strArr[2] = strArr[2] + ") "
  
  console.log(strArr)
  
  strArr[5] = strArr[5] + "-"
  
  let final
  
  for (i = 0; i < strArr.length; i++){
    final += strArr[i]
  }
  
//   return final  
    
  return final.slice(9)
}