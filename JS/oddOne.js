// Odd one

function oddOne(arr) {

  let solution = -1;
  
  arr.forEach((x, i) => {
    x % 2 == 1 || x % 2 == -1 ? solution = i : console.log("Skipped");
  })
  
  return solution;
  
}