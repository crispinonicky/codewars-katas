// Money Match

function doubleOrNothing(cash, wager, losses){

  let solution = (cash - (wager * (2**(losses - 1))));
  
  if (solution < 0) {
    solution = "I'll pay you back later"
  }
  
  return solution
  
}