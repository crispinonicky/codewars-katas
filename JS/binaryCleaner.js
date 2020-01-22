// Binary Cleaner

function binaryCleaner(arr) {

  let arr1 = [];
  let arr2 = [];
  
  arr.forEach((x, i) => {
    x <= 1 ? arr1.push(x) : arr2.push(i);
  })
  
  return([arr1, arr2]);
  
}