// Move the first letter of each word to the end of it, then add "ay" to the end
// of the word. Leave punctuation marks untouched.

function pigIt(str){
  
  let wordArr = str.split(" ")
  
//   console.log(wordArr)
  
  let map1 = wordArr.map(x => x.substring(1, x.length) +  x[0] + 'ay');
  
  for (i = 0; i < map1.length; i++) {
    if (map1[i].length === 3 && (map1[i][0] !== 'o')){
      console.log(map1[0][0])
      map1[i] = map1[i][0]
    } 
  }
  
  for (i = 0; i < map1.length; i++) {
    if (map1[i] === "O") {
      map1[i] = "Oay"
    }
  }
  
  console.log(map1)
  
  return map1.join(" ")
  
}