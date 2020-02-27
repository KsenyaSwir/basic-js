module.exports = function getSeason( date ) {
 // throw 'Not implemented';
  // remove line with error and write your code here
  if(!arguments[0]) return "Unable to determine the time of year!";
  if(!(date instanceof Date && !isNaN(date.valueOf()))) throw "Error";
  let month = date.getMonth();
  if(month < 2 || month === 11) return "winter";
  if(month < 5) return "spring";
  if(month < 8) return "summer";
  if(month < 11) return "autumn";
 
};
