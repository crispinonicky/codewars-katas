// Missing vowels

function absentVowel(str){
  
  let vowelBank = ['a', 'e', 'i', 'o', 'u'];
  let vowelsFound = [];
  
  for (let i = 0; i < str.length; i++) {
    str[i].toLowerCase() == 'a' ||
    str[i].toLowerCase() == 'e' ||
    str[i].toLowerCase() == 'i' ||
    str[i].toLowerCase() == 'o' ||
    str[i].toLowerCase() == 'u' ?
    vowelsFound.push(str[i].toLowerCase()) : 0;
  }
    
  let solution;
  
  for (let i = 0; i < vowelBank.length; i++) {
    vowelsFound.includes(vowelBank[i]) === false ? solution = i : 0;
  }
  
  return solution;
  
}