// Square every digit

function squareDigits(num){

  let solution = "";
    
    num.toString().split("").forEach((x, i) => {
      solution += (x ** 2).toString();
    })
    
    return parseInt(solution);
    
  }