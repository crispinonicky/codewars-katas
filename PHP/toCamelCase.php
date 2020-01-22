// Convert to camelcase

function toCamelCase($str){

if (strpos($str, '-') !== false) {
    $plit = explode("-", $str);
  } else {
    $plit = explode("_", $str);
  }
  
  $olution = [];

  for ($i = 1; $i < count($plit); $i++) {
    $plit[$i] = ucfirst($plit[$i]);
  }
  
  
//   $plit = $str[0] . substr($plit, 1);
  return(implode("", $plit));
  
}