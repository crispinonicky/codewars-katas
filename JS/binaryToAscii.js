// Binary to ascii converter

function binaryToString(binary) {
  
  let binVal = 0;
  let word = "";
  let reversed = binary.split("").reverse().join("");
    
  for (let i = 0; i < reversed.length + 1; i++) {
  
    if (i % 8 === 0 && i !== 0) {
      word += String.fromCharCode(binVal);
      binVal = 0;
    }
        
    binVal += parseInt(reversed[i]) * (2 ** (i % 8));
    
  }
  
  return word.split("").reverse().join("");
  
}

