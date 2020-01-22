// Deadfish (PHP)

function parse($data) {

  $val = 0;
  $solution = [];
  
  for ($i = 0; $i < strlen($data); $i++) {
  
    if ($data[$i] == "i") {
      $val++;
    } else if ($data[$i] == "d") {
      $val--;
    } else if ($data[$i] == "s") {
      $val = pow($val, 2);
    } else if ($data[$i] == "o") {
      array_push($solution, $val);
    }
    
  }
  
  return $solution;
  
}