// Persistent bugger

function persistence(num) {
   
  let str = num.toString()
  let counter = 0
  let solution = 1
  
  if (num < 10) {
    return counter
  }
  
  while (str.length > 1) {
  
    for (i = 0; i < str.length; i++) {
      solution *= parseInt(str[i])
    }
    
    str = solution.toString()
    solution = 1
    counter++
    
   }
     
  return counter
  
}

