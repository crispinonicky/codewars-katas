function spinWords(sentence){
  
  let words = sentence.split(" ");
  let solution = [];
  
  words.forEach((x,i) => {    
    x.length >= 5 ? solution.push(x.split("").reverse().join("")) : solution.push(x);
  });
    
  return solution.join(" ");

}