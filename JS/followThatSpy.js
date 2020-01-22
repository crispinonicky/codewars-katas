// Follow that spy

function findRoutes(routes) {
  
  let arr1 = routes[0];
  let startingPoint, endingPoint;
  let solution = [];
  
  for (i = 0; i < routes.length - 1; i++) {
    arr1 = arr1.concat(routes[i + 1]);
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr1[i]) === arr1.lastIndexOf(arr1[i]) && i % 2 == 0) {
      startingPoint = arr1[i];
    } else if (arr1.indexOf(arr1[i]) === arr1.lastIndexOf(arr1[i]) && i % 2 == 1) {
      endingPoint = arr1[i];
    }
  }
    
  let starts = [];
  let ends = [];
  
  for (i = 0; i < arr1.length; i++) {

    i % 2 === 0 ? starts.push(arr[i]) : ends.push(arr[i])
    
  }
  
  let final = [startingPoint];
  let currentLocation = startingPoint;
  
  for (let i = 0; i < starts.length; i++) {
    if(starts[i] === currentLocation){
      final.push(ends[i]);
      currentLocation = ends[i];
      i = -1; 
      continue;
    }
  }
  
  return (final.join(", "));
 
}