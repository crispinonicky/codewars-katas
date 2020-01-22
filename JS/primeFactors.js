// Primes in numbers

function primeFactors(n){
    
  let primeArr = []
  let counter = 2
  
  if (n == 1) {
    return n
  }
  
  while (n > 1) {
    if (n % counter == 0) {
      n = n / counter
      primeArr.push(counter)
      counter = 2
    } else {
      counter++
    }
  }
  
  let power = 1
  let finalArr = []
  
  for (i = 0; i < primeArr.length; i++) {
    if (primeArr[i] !== primeArr[i + 1] && power == 1) {
      finalArr.push("(" + primeArr[i] + ")")
    } else if (primeArr[i] !== primeArr[i + 1]) {
      finalArr.push("(" + primeArr[i] + "**" + power + ")")
      power = 1
    } else if (primeArr[i] == primeArr[i + 1]) {
      power++
    }
  }  
      
  return finalArr.join("")
  
}