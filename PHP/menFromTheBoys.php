// Sort out the men from the boys

function menFromBoys($arr) {
  
  $manArr = [];
  $boyArr = [];
  
  for ($i = 0; $i < count($arr); $i++) {
    print_r($arr[$i] . "\n");
    
    if ($arr[$i] % 2 === 0){ 
      array_push($manArr, $arr[$i]);
    } else {
      array_push($boyArr, $arr[$i]);
    }
  
  }
  
  sort($manArr);
  rsort($boyArr);

  $final = array_merge($manArr, $boyArr);
    
  return array_values(array_unique($final));
  
}
