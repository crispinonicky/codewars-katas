// Class average (PHP)

function betterThanAverage($classPoints, $yourPoints) {
  
  $avg = array_sum($classPoints)/count($classPoints);
  
  echo $avg;
  
  if ($yourPoints > $avg) {
    return true;
  }
  
  return false;
  
}