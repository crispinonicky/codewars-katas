// Write an algorithm that takes an array and moves all of the zeros to the end, preserving 
// the order of the other elements.

var moveZeros = function (arr) {
  
  let nonZero = arr.filter(item => item !== 0)
  let zeros = arr.filter(item => item === 0) 
  
  console.log(nonZero)
  
  return(nonZero.concat(zeros))
  
}