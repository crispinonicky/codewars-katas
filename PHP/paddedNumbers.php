// Substituting variables into strings: Padded Numbers (PHP)

function solution($value){
  
  while((strlen(strval($value))) < 5){
    $value = "0" . $value;
    print($value);   
  }
  
  return "Value is " . $value;
  
};