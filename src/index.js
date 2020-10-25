
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix !== 'object' || matrix.length == 0) {
    return [];
  }
  let firsts = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i == 0){firsts.push(matrix[i])} else {
    if (i % 2) {firsts.push(matrix[i].reverse())} else {
      firsts.push(matrix[i])
    }
    
  }}
  let str = firsts.join();
  let  arr = str.split(',');
  let arr2 = [];
  for (let i = 0; i < arr.length; i++){
    arr2.push(parseInt(arr[i]));
  }
  
  return arr2;
  
}
