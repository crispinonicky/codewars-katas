// Unique in order

function uniqueInOrder(iterable){
  
  let solution = [];
    
  for (let i = 0; i < iterable.length; i++) {
    iterable[i] !== iterable[i + 1] ? solution.push(iterable[i]): 0;
  }
  
  return solution;
  
}