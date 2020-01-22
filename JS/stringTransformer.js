// String Transformer

function stringTransformer(str) {
  
  let strArr = str.split("");
  
  strArr.forEach((x, i) => {
    x.charCodeAt(0) >= 97 ? strArr.splice(i, 1, x.toUpperCase()) : 
    strArr.splice(i, 1, x.toLowerCase());
  })
  
  return strArr.join("").split(" ").reverse().join(" ");
  
}