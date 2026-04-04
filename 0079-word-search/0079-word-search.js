/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
 let rows=board.length
 let cols=board[0].length
 let path =new Set()
 function backtrack(r,c,index)
 {
    if(index===word.length)
    return true 
    if(r>=rows || c>=cols || r<0 || c<0 || board[r][c]!==word[index]|| path.has(`${r},${c}`))
    return false
    path.add(`${r},${c}`)
    let res=backtrack(r,c-1,index+1) || backtrack(r,c+1,index+1) || backtrack(r+1,c,index+1) || backtrack(r-1,c,index+1)
    path.delete(`${r},${c}`) 
    return res
 }
 for(let i=0;i<rows;i++)
 {
    for(let j=0;j<cols;j++)
    {
      if(backtrack(i,j,0))
      return true
    }
 }
 return false
};