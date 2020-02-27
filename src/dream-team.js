module.exports = function createDreamTeam( members ) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }

  let newArr = members.filter(item => typeof(item) == 'string').map( item => item.trim().toUpperCase()).sort();
  console.log(newArr);
  return newArr.reduce((team, item) => team + item[0], "");
};