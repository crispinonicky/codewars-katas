// Street Fighter 2 Character Select Screen

function streetFighterSelection(fighters, position, moves){

  let solution = [];
  
  moves.forEach((x, i) => {
    if (x == 'up') {
      position[1] = 0;
    } else if (x == 'down') {
      position[1] = 1;
    } else if (x == 'right' && position[0] != 5) {
      position[0]++;
    } else if (x == 'left' && position[0] != 0) {
      position[0]--;
    } else if (x == 'right' && position[0] == 5) {
      position[0]-=5;
    } else if (x == 'left' && position[0] == 0) {
      position[0]+=5;
    } 
      solution.push(fighters[position[1]][position[0]]);
  })
  
  return solution;
    
}