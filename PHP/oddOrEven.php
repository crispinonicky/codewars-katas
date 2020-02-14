function odd_or_even(array $a): string {
  
  if (array_sum($a) % 2 == 0) {
    return("even");
  } else {
    return("odd");
  }
  
}