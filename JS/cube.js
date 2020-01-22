// You are a cube

function youAreACube (value){

  console.log(value)
  
  console.log(value ** (1/3))

  return (value ** (1/3)) % 1 == 0 || value ** (1/3) % 1 > .999999  ? true : false

}