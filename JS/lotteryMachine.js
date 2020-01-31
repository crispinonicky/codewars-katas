function lottery(str){
   
  let nums = "";
   
  for (let i = 0; i < str.length; i++) {
    str[i] > -1 ? nums += str[i] : 0;
  }
  
  if (nums.length === 0) {
    return 'One more run!';
  }
     
  let solution = "";
  
  for (let i = 0; i < nums.length; i++) {
    solution.indexOf(nums[i]) === -1 ? solution += nums[i] : 0;
  }

 return solution;

}