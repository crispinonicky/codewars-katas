function golfScoreCalculator(parList, scoreList){

  let finalScore = 0;
  
  for (let i = 0; i < parList.length; i++) {
    finalScore += (scoreList[i] - parList[i]);
  }
  
  return finalScore;
  
}