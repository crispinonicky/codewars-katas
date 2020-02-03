function isSolved(board) {
  let unfinished = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        unfinished = true;
      } else if (board[row][col] === 1 || board[row][col] === 2) {
        if (row + 2 < board.length && col + 2 < board.length) {
          if (
            board[row][col] === board[row + 1][col + 1] &&
            board[row][col] === board[row + 2][col + 2]
          ) {
            console.log("3 in a row diagonally down");
            return board[row][col];
          }
        }

        if (row - 2 >= 0 && col + 2 < board.length) {
          if (
            board[row][col] === board[row - 1][col + 1] &&
            board[row][col] === board[row - 2][col + 2]
          ) {
            console.log("3 in a row diagonally up");
            return board[row][col];
          }
        }

        if (col + 2 < board.length) {
          if (
            board[row][col] === board[row][col + 1] &&
            board[row][col] === board[row][col + 2]
          ) {
            console.log("3 in a row horizontally");
            return board[row][col];
          }
        }

        if (row + 2 < board.length) {
          if (
            board[row][col] === board[row + 1][col] &&
            board[row][col] === board[row + 2][col]
          ) {
            console.log("3 in a row vertically");
            return board[row][col];
          }
        }
      }
    }
  }

  if (unfinished == true) {
    console.log("There are still moves to be made");
    return -1;
  }

  return 0;
}
