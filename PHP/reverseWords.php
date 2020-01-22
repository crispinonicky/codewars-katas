// Reverse words (PHP)

function reverseWords($str) {
  
  $arr = explode(" ", $str);
  
  foreach ($arr as &$word) {
    $word = strrev($word);
  }
  
  return (implode(" ", $arr));
  
}