// Cat and Mouse (WIP)

function catMouse(x, j){

  console.log(x)
  console.log(j)
  
  let solution = null;
  
  x.includes("C") === false || 
  x.includes("D") === false || 
  x.includes("m") === false ? solution = "boring without all three" : 0;
  
  let filtered = x.split("").filter(x => 
    x !== "."
  ).join("");
  
  console.log(filtered)
  
  let protect = false;
    
  console.log(x.indexOf("C"))
  console.log(x.indexOf("m"))
  
  let counter = 0;
  
  if (x.indexOf("C") < x.indexOf("m")) {
    for (let i = x.indexOf("C"); i < x.indexOf("m"); i++) {
      console.log(x[i]);
      
      if (x[i] === "D") {
        solution = "Caught!";
      }
      
      x[i] === "." ? counter++ : 0;
    } 
  } else {
    for (let i = x.indexOf("m"); i > x.indexOf("C"); i--) {
      console.log(x[i]);
      
      if (x[i] === "D") {
        solution = "Caught!";
      }
      
      x[i] === "." ? counter++ : 0;
    } 
  }
  
  if (counter <= j) {
    
  }
  
  console.log(solution)

}