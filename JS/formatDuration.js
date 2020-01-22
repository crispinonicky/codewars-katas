// Your task in order to complete this Kata is to write a function which formats
// a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns
// "now". Otherwise, the duration is expressed as a combination of years, days, 
// hours, minutes and seconds.

function formatDuration (seconds) {
  
  if (seconds === 0) {
    return "now"
  }
  
  let secs = seconds % 60
  let mins = Math.floor(seconds/60) % 60
  let hours = Math.floor(seconds/3600) % 24
  let days = Math.floor(seconds/86400) % 365
  let years = Math.floor(seconds/(86400 * 365))
  
  let timeArr = [years, days, hours, mins, secs]
  
  console.log(timeArr)
  
//   let finalArr = timeArr.filter(x => x > 0)
  
  if (timeArr[4] === 1){
    timeArr[4] = timeArr[4] + " second"
  } else {
    timeArr[4] = timeArr[4] + " seconds"
  }
  
  if (timeArr[3] === 1){
    timeArr[3] = timeArr[3] + " minute"
  } else {
    timeArr[3] = timeArr[3] + " minutes"
  }
  
  if (timeArr[2] === 1){
    timeArr[2] = timeArr[2] + " hour"
  } else {
    timeArr[2] = timeArr[2] + " hours"
  }
  
  if (timeArr[1] === 1){
    timeArr[1] = timeArr[1] + " day"
  } else {
    timeArr[1] = timeArr[1] + " days"
  }
  
  if (timeArr[0] === 1){
    timeArr[0] = timeArr[0] + " year"
  } else {
    timeArr[0] = timeArr[0] + " years"
  }
  
  for (i = timeArr.length - 1; i >= 0; i--){
    if (timeArr[i][0] == "0"){
      console.log("remove: " + timeArr[i])
      timeArr.splice(i, 1)
    } else {
      console.log("keep: " + timeArr[i])
    }
  }
  
  timeArr.reverse()
  
  console.log(timeArr)
  
//   console.log("Seconds: " + secs)
//   console.log("Minutes: " + mins)
//   console.log("Hours: " + hours)
//   console.log("Days: " + days)
//   console.log("Years: " + years)

  if (timeArr.length == 1){
    return timeArr[0]
  } else if (timeArr.length == 2){
    return timeArr[1] + " and " + timeArr[0]
  } else if (timeArr.length == 3){
    return timeArr[2] + ", " + timeArr[1] + " and " + timeArr[0]
  } else if (timeArr.length == 4){
    return timeArr[3] + ", " + timeArr[2] + ", " + timeArr[1] + " and " + timeArr[0]
  } else {
    return timeArr[4] + ", " + timeArr[3] + ", " + timeArr[2] + ", " + timeArr[1] + " and " + timeArr[0]    
  }

}