// Well of ideas

function well(x){

  let counter = 0;
    x.forEach(x => {
      if (x == 'good') {
        counter++
      }
    })
    
    if (counter == 1 || counter == 2) {
      return 'Publish!'
    } else if (counter > 2) {
      return 'I smell a series!'
    } else {
      return 'Fail!'
    }
  }
  