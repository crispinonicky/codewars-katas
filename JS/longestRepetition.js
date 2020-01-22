// Character with longest consecutive repetition

function longestRepetition(s) {

  let maxArr = ['', 0];
  let counter = 1;
  
  for (let i = 0; i < s.length - 1; i++) {
    s[i] == s[i + 1] ? counter++ : counter = 1;
    counter > maxArr[1] ? maxArr.splice(0, 2, s[i], counter) : 0;
  }
   
  return maxArr;
}