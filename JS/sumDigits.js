// sumDigits

function sumDigits(number) {

  return parseInt(Math.abs(number).toString().split("").reduce((a,b) => {
    return parseInt(a) + parseInt(b)
  }))
  
}