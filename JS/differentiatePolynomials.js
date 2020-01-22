// Polynomials

function differentiate(equation, point){
  
  let solution = 0;
  let signs = [];
  let values = equation.split(/[-+]+/);
  
  for (let i = 0; i < equation.length; i++) {
    equation[i] == '-' || equation[i] == '+' ? signs.push(equation[i]) : 0;
  }
  
  values[0] == '' ? values.shift() : signs.unshift('+');
  let copy = [...values]; 
  
  for (let i = 0; i < values.length; i++) {
  
    parseInt(values[i]) == values[i] ? values.splice(i, 1, "0") : 0;
  
    values.splice(i, 1, values[i].replace('x', `*${point}`))
    values[i][0] == '*' ? values.splice(i, 1, values[i].slice(1)) : 0;
    
    let base = values[i];
    values[i].includes("^") == true ? 
      base = values[i].split("^").slice(-1)[0] * parseInt(values[i]) : 0;
        
    if(base !== values[i]) {
      let current = values[i].replace(values[i].split('*')[0], base);
      if (current.includes("^") == true) {
        let power = current.split("^")[current.split("^").length - 1] - 1
        values.splice(i, 1, `${base}*(${point})^${power}`)
      } else {
        values.splice(i, 1, current);
      }  
    }
    
    values[i].includes('*') == true && values[i].includes('^') != true ?
      values.splice(i, 1, parseInt(copy[i])) : 0;
      
    copy[i] == 'x' ? values.splice(i, 1, 1) : 0;
    values.splice(i, 1, values[i].toString());

    values[i].toString().includes("^") == true ? 
      values.splice(i, 1, eval(values[i].replace("^", "**"))) : 0;
      
    values.length > signs.length ? signs.unshift('+') : 0;
     
    signs[i] == '+' ? solution += parseInt(values[i]) : solution -= parseInt(values[i]);
  }
  
  return(solution);
  
}