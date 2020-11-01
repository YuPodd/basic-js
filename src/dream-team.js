const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || typeof members !== 'object' || members.length === 0) {
    return false;
  }
  let arr = [];
  let result = '';
  for(let i = 0; i < members.length; i++){
    if (typeof members[i]==='string'){
  arr.push(members[i].trim().toUpperCase().charAt(0));
    }
  }
  return result = arr.sort().join('');
  };
  
  
