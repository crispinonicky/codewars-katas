// Split strings

function solution($str) {

  if (strlen($str) % 2 === 1) {
    $str .= "_";
  }
  
  $olution = [];

  for ($i = 0; $i < strlen($str); $i = $i + 2) {
    array_push($olution, substr($str, $i, 2));
  }
  
  return $olution;

}