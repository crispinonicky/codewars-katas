// This time no story, no theory. The examples below 
// show you how to write function accum:

function accum(s) {

  let strArr = s.split("")
  
  for (i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toUpperCase()
  }
  
  for (i = 0; i < strArr.length; i++) {
    let copy = strArr[i]
    for (j = 0; j < i; j++){
      strArr[i] = strArr[i].toLowerCase() + copy
    }
    strArr[i] = strArr[i].split("").reverse().join("")
  }
  
  let solution = ""
  
  for (i = 0; i < strArr.length; i++){
    if (i == strArr.length - 1){
      solution += strArr[i]
    } else {
    solution += strArr[i] + '-'
    }
  }
  
  return solution

}