function infected(s) {

  let solution = 0;
  let popArr = s.split("X");
  
  if (popArr.join("").length === 0) {
    return 0;
  }
  
  for (let i = 0; i < popArr.length; i++) {
    if (popArr[i].includes("1")) {
      solution += "1".repeat(popArr[i].length).length;
    } 
  }

  return solution/popArr.join("").length * 100;

}