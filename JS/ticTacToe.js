function isSolved(board) {
  
  console.log(board);
  
  
  for (let row = 0; row < board.length; row++) {
  
     for (let col = 0; col < board[row].length; col++) {
     
//        console.log(board[row][col] )  
       
      if (board[row][col] === 0) {
        return -1
      } 
      
      if (row + 2 < board.length && col + 2 < board.length) {
       console.log(board[row][col] )          
        if (board[row][col] === board[row + 1][col + 1] && board[row][col] === board[row + 2][col + 2]) {
          return board[row][col]
          return ("3 in a row diagonally down")
        }
      } 
      if (row - 2 >=  0 && col + 2 < board.length) {
       console.log(board[row][col] )          
        if (board[row][col] === board[row - 1][col + 1] && board[row][col] === board[row - 2][col + 2]) {
          return board[row][col]
          throw ("3 in a row diagonally up")
        }
      }       
      if (col + 2 < board.length) {
       console.log(board[row][col] )          
        if (board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2]) {
          return board[row][col]
          throw ("3 in a row horizontally")
        }
      } 
      if (row + 2 < board.length) {
        console.log('checking horizontal', board[row][col] )          
        if (board[row][col] === board[row + 1][col] && board[row][col] === board[row + 2][col]) {
          return board[row][col]
          throw ("3 in a row vertically")
        }
      } 
    }
    
       
  }
  
//     for (let row = 0; row < board.length; row++) {
  
//      for (let col = 0; col < board[row].length; col++) {
//         if (board[row][col] === 0) {
//           return -1
//         }
//       }
//   }
    
}