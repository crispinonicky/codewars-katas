function getFreeUrinals(urinals){

  let solution = 0;

  if (urinals === "0") {
    return 1;
  } else if (urinals === "1") {
    return 0;
  }
  
  for (let i = 0; i < urinals.length - 1; i++) {
    if (urinals[i] === "1" && urinals[i + 1] === "1") {
      return -1;
    }  
  }
      
  if (urinals[0] === "0" && urinals[1] === "0") {
    solution++;
    urinals = "1" + urinals.substr(1, urinals.length);
  }
  
  for (let i = 1; i < urinals.length - 1; i++) {  
    if (urinals[i] === "0" &&
        urinals[i - 1] === "0" &&
        urinals[i + 1] === "0") {
          solution++;
          urinals = urinals.substr(0, i) + "1" + urinals.substr(i + 1);
        }
  }
  
  
  if (urinals[urinals.length - 1] === "0" && urinals[urinals.length - 2] === "0") {
    solution++;
  }
  
  return(solution);
  
}