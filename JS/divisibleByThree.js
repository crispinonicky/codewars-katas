// JS Multiples of 3 puzzle:

function divisibleByThree(str){

  let sum = 0
  
  let arr = str.split("")
  
//   console.log(arr)
  
  arr.forEach(eachNum => {
    eachNum = parseInt(eachNum)
    sum += eachNum
  })
  
  if (sum % 3 === 0) {
    return true
  }
  
  
  return false

}