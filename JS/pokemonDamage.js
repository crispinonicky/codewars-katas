// pokemon damage calc (WIP, kata formula was incorrect)

function calculateDamage(yourType, opponentType, attack, defense){

  console.log("Your type:", yourType);
  console.log("Opponent's type:", opponentType);
  console.log("Attack power:", attack);
  console.log("Opponent's defense:", defense);
  
  let effectiveness;
  
//   console.log(damage);
  
  if (opponentType === 'electric') {
    effectiveness = 1;
  } else if (
  (opponentType === 'fire' && yourType === 'water') ||
  (opponentType === 'grass' && yourType === 'fire') ||
  (opponentType === 'water' && (yourType === 'grass' || yourType === 'electric'))
  ) {
    effectiveness = 2;
  } else {
    effectiveness = 0.5;
  }
  
  let damage = 50 * (attack/defense) * effectiveness; 
  
  console.log(damage);
  
}