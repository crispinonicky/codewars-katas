// Most sales

function top3(products, amounts, prices) {

  let newArr = [];
  
  for (let i = 0; i < products.length; i++) {
    newArr.push(
      {
        product: products[i],
        revenue: amounts[i] * prices[i]
      }
    );
  }
    
  let sorted = newArr.sort((a,b) => {
    return b.revenue - a.revenue;
  })
    
  return [sorted[0].product, sorted[1].product, sorted[2].product];
  
}