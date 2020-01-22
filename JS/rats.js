// Rats rats we are the rats

var countDeafRats = function(town) {

  let numRats = town.split("O").length - 1;  
  let townArr = town.replace(/\s/g, '').replace("P", "PP").match(/.{1,2}/g);
  
  let faceRight = true;
    
  for (let i = 0; i < townArr.length; i++) {
    
    townArr[i] == "PP" ? faceRight = false : 0;
    townArr[i] == "~O" && faceRight == true ? numRats-- : 0;
    townArr[i] == "O~" && faceRight == false ? numRats-- : 0;
    
  }
  
  return numRats;
}