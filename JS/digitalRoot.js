// Digital Root

function digital_root(n) {
  
  while (n.toString().length > 1) {
    n = n.toString().split("").map(x => 
      Number(x)
    ).reduce((a,b) => 
      a += b
    )
  }
  
  return n;
  
}