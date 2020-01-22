// Eliminate the intruders

function eliminateUnsetBits(number) {

  let sum = 0;
  let power = 0;
  
  number.split("").forEach((x, i) => {
    x == 1 ? sum += 2 ** power : power--;
    power++;
  })
   
  return sum;
   
} 

