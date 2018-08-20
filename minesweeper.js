document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[ 
      {row:0,col:0,isMine:false,hidden:true},
      {row:2,col:2,isMine:true,hidden:true},
      {row:0,col:1,isMine:false,hidden:true},
      {row:2,col:1,isMine:true,hidden:true},
      {row:1,col:2,isMine:false,hidden:true},
      {row:3,col:2,isMine:true,hidden:true},
      {row:2,col:3,isMine:true,hidden:true},
      {row:3,col:1,isMine:false,hidden:true},
      {row:1,col:0,isMine:true,hidden:true},
      {row:4,col:3,isMine:false,hidden:true},
      {row:2,col:4,isMine:true,hidden:true},
      {row:4,col:2,isMine:false,hidden:true},
      {row:3,col:4,isMine:true,hidden:true},
      {row:4,col:1,isMine:false,hidden:true},
      {row:1,col:4,isMine:true,hidden:true},
      {row:3,col:3,isMine:true,hidden:true}
  ]
}



function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var i=0; i<board.cells.length; i++){
  board.cells[i].surroundingMines= countSurroundingMines(board.cells[i]);
  document.addEventListener('click',checkForWin);
  document.addEventListener('contextmenut',checkForWin);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
var cellinside = board.cells
function checkForWin () {
  for(let w = 0; w < cellinside.length; w++){
     if(cellinside[w].isMine === true && cellinside[w].isMarked === false){
       return;
     }else if(cellinside[w].isMine === false && cellinside[w].hidden === true){
       return;
     }
   }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
 for(var x=0; x<surrounding.length; x++){
  if(surrounding[x].isMine === true) {
    var count = 0;
    count++
  return count
  }

 }
 
}

// reset button
function resetfunction() {
  document.getElementById('reset',location.reload())
}

var audio = $('#dogbark')[0];
$('#game').mouseenter(function(){
  audio.play();
});
