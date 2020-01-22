// Strings mix

function mix(s1, s2) {
  
  let checked = []
  let length = Math.abs(s1.length - s2.length)
  
  for (i = 0; i < length; i++) {
  
    if (s1.length > s2.length) {
      s2 += " "
    } else if (s2.length > s1.length) {
      s1 += " "
    } 
    
  }
  
  s1 = s1.split("")
  s2 = s2.split("")
 
  for (i = 0; i < s1.length; i++) {
    if (s1[i].charCodeAt(0) >= 65 && s1[i].charCodeAt(0) <= 90) {
      s1.splice(i, 1, " ")
    }
    
    if (s2[i].charCodeAt(0) >= 65 && s2[i].charCodeAt(0) <= 90) {
      s2.splice(i, 1, " ")
    }    
  }
 
  s1 = s1.join("")
  s2 = s2.join("")
 
    for (i = 0; i < s1.length; i++) {
    
      if (checked.indexOf(s1[i]) === -1) {
        checked.push(s1[i])
      }
      if (checked.indexOf(s2[i]) === -1) {
        checked.push(s2[i])
      }
      
    }
    
    for (i = 0; i < checked.length; i++) {
      if (checked[i].charCodeAt(0) < 97 || checked[i].charCodeAt(0) > 122) {
        checked.splice(i, 1)
        i--
      }
    }
        
    let count1 = 0
    let count2 = 0
    let final = []

    for (i = 0; i < checked.length; i++) {
    
      for (j = 0; j < s1.length; j++) {
      
        if (s1[j].toLowerCase() === checked[i]) {
          count1++
        }
        
        if (s2[j].toLowerCase() === checked[i]) {
          count2++
        } 
        
      }
      
      if (count1 > count2 && count1 > 1) {
        final.push("1:" + checked[i].repeat(count1) + "/$")
      } else if (count2 > count1 && count2 > 1) {
        final.push("2:" + checked[i].repeat(count2) + "/$")
      } else if (count1 === count2 && count1 > 1) {
        final.push("=:" + checked[i].repeat(count1) + "/")
      }
            
      count1 = 0
      count2 = 0
    
    }
    
    final.sort(function(a, b){
      return b.length - a.length || a.localeCompare(b);
    });
    
    final = final.join("").split("")
    
    for (i = 0; i < final.length; i++) {
      if (final[i] === "$") {
        final.splice(i, 1)
        i--
      }
    }
     
    return final.splice(0, final.length - 1).join("")
  }