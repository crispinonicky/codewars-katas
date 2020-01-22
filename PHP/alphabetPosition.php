// Replace with alphabet position

function alphabet_position(string $s): string {

  $s = strtolower($s);

  $alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
  for ($i = 0; $i < strlen($s); $i++) {
    if (in_array($s[$i], $alphabet) === true) {
      $olution .= (array_search($s[$i], $alphabet) + 1) . " ";
    }
  }
  
  return substr($olution, 0, strlen($olution) - 1);
  
}