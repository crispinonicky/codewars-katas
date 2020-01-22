// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except 
// for the last two names, which should be separated by an ampersand.

function list(names){

  if (names.length == 1){
    return names[0].name
  } else if (names.length == 2){
    return names[0].name + ' & ' + names[1].name
  } else if (names.length === 0){
    return ''
  }
  
  let nameStr = ''
  
  for (i = 0; i < names.length; i++) {
    if (i == names.length - 1){
      return (nameStr + "& " + names[i].name)
    } else if (i === names.length - 2){
      nameStr = nameStr + names[i].name + " "
    } else {
    nameStr = nameStr + names[i].name + ", "
    }
  }
  
  console.log(nameStr)

  console.log(names.length)
}