// Find the number of divisors of a positive integer n.

function getDivisorsCnt(n){

  let o = n;
  let total = 0; 
  
  while(o > 0){
   if(n%o === 0){
     total++
   }
   o--;
  }
  return total;
 }