// Reverse every other word

function reverse(str){
  
  let revArr = []
  str = str.split(" ")
  
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      revArr.push(str[i])
    }
  }
  
  for (let i = 0; i < revArr.length; i++) {
    revArr.splice(i, 1, revArr[i].split("").reverse().join(""))
  }
  
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      str.splice(i, 1, revArr[0])
      revArr.splice(0,1)
    }
    if (str[i] === "") {
      return str[i]
    }
  }
  
  return str.join(" ")
}