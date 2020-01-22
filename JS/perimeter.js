// Perimeter of squares in rectangles

function perimeter(n) {
    
  let fib = [0,1]
  
  for (i = 0; i < n; i++) {
    fib.push(fib[i] + fib[i + 1])
  }
    
  fib.shift()
    
  const final = fib.map(num => num * 4);
    
  let sum = 0
  
  for (i = 0; i < final.length; i++) {
    sum += final[i]
  }
  
  return sum
    
}