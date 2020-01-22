// Custom Christmas Tree

function customChristmasTree(chars,n){

  let treeLength = ((n * (n + 1))/2);
  let tree = "";
  let trunk = ("\n" + " ".repeat(n - 1) + "|").repeat(Math.floor(n/3));
     
  for (let i = 0; i < treeLength; i++) {
    tree += chars[i % chars.length] + " ";
  }
  
  let rows = 1;
  let solution = "";
  
  while (rows <= n) {
    solution += " ".repeat(n - rows) + tree.slice(0, rows * 2) + "\n";
    tree = tree.slice(rows * 2, tree.length);
    rows++;
  }
  
  solution = (solution.slice(0, solution.length - 1) + trunk)
  .replace(/ \n/g, "\n"); 
  
  return solution;
  
}