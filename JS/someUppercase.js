// Some Uppercase

function testit(s){

  let copy = "";
  
  for (let i = 0; i < s.length; i++) {
    s[i + 1] == " " || i == s.length - 1 ?
    copy += s[i].toUpperCase() :
    copy += s[i];
    }
  
  return copy;
  
}