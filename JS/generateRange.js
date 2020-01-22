// Range of integers

function generateRange(min, max, step){
  
  let solution = [];
  
  for (let i = min; i <= max; i+= step) {
    solution.push(i);
  }
  
  return solution;
   
}