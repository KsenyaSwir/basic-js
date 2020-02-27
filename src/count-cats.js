module.exports = function countCats( matrix ) {
 /* let str = matrix.join(',');
  const arr = str.split(',');*/
 
  let array = matrix.flat(2);
  return array.filter((elem) => elem === '^^').length;

}
