// Sentencify (PHP)

function sentencify($words){
    
  $words[0] = ucfirst($words[0]);
  $words[count($words) - 1] = $words[count($words) - 1] . ".";
  $final = implode(" ", $words);
  
  return $final;
  
}