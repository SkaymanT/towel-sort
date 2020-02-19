module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
      return [];
  }
  let result = [];
  let k = 0;
  for(let i = 0; i < matrix.length; ++i) {
      for(let j = 0; j < matrix[i].length; ++j) {
          if(i % 2 === 0){
          result[k++]= matrix[i][j];
          } else{
            result[k++] = matrix[i][matrix[i].length - j - 1];
          }
      }
  }

  return result;
}