// Range extraction

function solution(list){
  
  let final = []
  let starter = " "
  
  for (i = 0; i < list.length; i++) {
 
    if (list[i] !== list[i + 1] - 1) {
      final.push(list[i])
      starter = " "
    } else if (starter == " ") {
      starter = list[i]
      final.push(starter + "_")
    } 
  }
  
     for (i = 0; i < final.length; i++) {
       if (parseInt(final[i]) + 1 === parseInt(final[i + 1])) {
         final.splice(i, 1, parseInt(final[i]))
       }
     }
     
     let combine
     let solution = []
     
     for (i = 0; i < final.length; i++) {
       combine = final[i]
       if (typeof(final[i]) === "string"){
         combine = final[i].concat(final[i + 1])
         i++
       }
       solution.push(combine)
     }
 
    
    let test = []
    
    for (i = 0; i < solution.length; i++) {
      if (typeof(solution[i]) == 'string') {
        test = solution[i].split("")
        for (j = 0; j < test.length; j++) {
          if (test[j] === "_") {
            test.splice(j, 1, '-')
            test.join("")
          }
          
        }
 
        solution.splice(i, 1, test)
        test = test.join("")
 
      }
      
    }
     
  let actuallyAnswerLol = []
  
      for (i = 0; i < solution.length; i++) {
        if (typeof(solution[i]) == 'object') {
          console.log(solution[i].join(""))
          actuallyAnswerLol.push(solution[i].join(""))
          solution[i].splice(i, 1, solution[i].join(""))
        } else if (typeof(solution[i]) == 'number') {
          actuallyAnswerLol.push(solution[i])
        }
      }
  
  return actuallyAnswerLol.join(",")
  
 }