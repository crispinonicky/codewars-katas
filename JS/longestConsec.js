// You are given an array strarr of strings and an integer k. Your task is to 
// return the first longest string consisting of k consecutive strings taken in 
// the array.

function longestConsec(strarr, k) {

  if (strarr.length === 0 || k > strarr.length || strarr.length <= 0) {
    return ""
  }
  
    let longestString = ""
    let stringArr = []
    let finalArr = []
      
      for (i = 0; i < strarr.length - k + 1; i++) {
        let currentWord = strarr[i]
        let j = 0
        while (j < k){
          stringArr.push(strarr[i])
          j++
          i++
        }
        stringArr.push("-")
        i = i - k
        j = 0
        finalArr.push(stringArr.join(""))
      } 
      
      let bigString = finalArr[finalArr.length - 1].slice(0, finalArr[finalArr.length - 1].length - 1)
       
      let solutionArr = bigString.split("-")
      
  //     console.log(solutionArr)
      
      for(i = 0; i < solutionArr.length; i++) {
        if (longestString.length < solutionArr[i].length){
          longestString = solutionArr[i]
        }
      }
      
      return longestString
      
  }