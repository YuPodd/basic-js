const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    const result = [];

  if (!Array.isArray(arr)) throw new Error();
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (arr[i - 1] !== undefined) {
        if (arr[i - 2] !== '--discard-next'){
          result.pop();
        } 
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) result.push(arr[i + 1]);
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next')
       continue;
      if (arr[i - 1] !== undefined)
       result.push(arr[i - 1]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};