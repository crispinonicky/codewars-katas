// Remove string spaces (PHP)

function no_space(string $s): string {
  
  $solution = explode(" ",$s);
  
//   print_r ($solution);
  
  $solution = join($solution);
  
  return ($solution);
  
}

