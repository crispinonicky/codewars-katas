// Length of sequence

var lengthOfSequence = function (arr, n) {
  
  return arr.filter((v) => (v === n)).length != 2 ? 0 : arr.lastIndexOf(n) - arr.indexOf(n) + 1;
  
};