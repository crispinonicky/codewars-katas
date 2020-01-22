// New cashier does not know about space or shift

function getOrder(input) {
  
  let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings",
  "Milkshake", "Coke"]
  
  let order = []
  
  let currentWord = ""
  
  for (i = 0; i < input.length; i++){
    currentWord += input[i]
//     console.log(currentWord)
    for (j = 0; j < menu.length; j++) {
      if (currentWord === menu[j].toLowerCase()) {
        order.push(menu[j])
        currentWord = ""
      }
    }
  }
    
  let final = []
  
  for (i = 0; i < menu.length; i++) {
    for (j = 0; j < order.length; j++) {
      if (order[j] === menu[i]) {
        final.push(order[j])
      }
    }
  }
  
  return final.join(" ")
  
}