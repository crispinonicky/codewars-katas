// Find the missing letter

function find_missing_letter(array $array): string {

  for ($i = 0; $i < count($array); $i++) {
    if (ord($array[$i]) + 1 !== ord($array[$i + 1])) {
      return chr(ord($array[$i]) + 1);
    }
  }
  
}
