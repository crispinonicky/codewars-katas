function sumOfMinimums(arr) {

  let solution = 0;
    
    for (let i = 0; i < arr.length; i++) {
      
      let single = arr[i].sort((a,b) => {
        return a - b;
      })
          
      solution += single[0];
      
    }
    
    return solution;
    
  }