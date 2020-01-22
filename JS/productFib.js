// Product of consecutive Fib numbers (JS)

function productFib(prod){
    
  let fib = [0,1]
  
  for (i = 0; i < 99; i++) {
    fib.push(fib[i] + fib[i + 1])
  }
    
  for (i = 0; i < fib.length; i++) {
  
    if (fib[i] * fib[i + 1] == prod) {
      return [fib[i], fib[i + 1], true]
    } else if (fib[i] * fib[i + 1] > prod) {
      return [fib[i], fib[i + 1], false]
    }
    
  }
      
}