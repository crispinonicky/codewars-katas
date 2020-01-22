// Write a function, which takes a non-negative integer (seconds) as input and 
// returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
  
  hours = (Math.floor(seconds/3600)).toString()
  mins = (Math.floor(((seconds/3600) - hours) * 60)).toString()
  secs = (seconds % 60).toString()
  
  if (hours.length === 1){
    hours = "0" + hours
  }
  
  if (mins.length === 1){
    mins = "0" + mins
  }
  
  if (secs.length === 1){
    secs = "0" + secs
  }

return(hours +":" + mins + ":" + secs)
  
}