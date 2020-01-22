// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

function solution(str, ending){

  let solution = ""
  
  for (i = str.length - 1; i > (str.length - 1) - ending.length; i--){
    console.log(str[i])
    solution = str[i] + solution
  }
  
//   return solution

if (solution === ending){
  return true
} else {
  return false
}
  
}