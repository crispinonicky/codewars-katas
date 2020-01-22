// The Arpeggiator (Work in progress)

function arpeggio(notes) {

  let notesArr = [notes];
  
  console.log(notes.charCodeAt(0))
  
  let i = 0;
  
  while (notes.length !== 0) {
    i++
    notesArr.push(String.fromCharCode(notesArr.charCodeAt(i - 1)));
  }
  
  console.log(notesArr)
  
}