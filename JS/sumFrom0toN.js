let SequenceSum = {

  showSequence: function(num) {
  
    if (num === 0) {
      return '0=0';
    } else if (num < 0) {
      return `${num}<0`;
    }
  
    let solution = '0';
    let total = 0;
    
    for (let i = 1; i <= num; i++) {
      solution += `+${i}`;
      total += i;
    }
    
    return `${solution} = ${total}`
    
  }
}