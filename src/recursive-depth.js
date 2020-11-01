const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  // calculateDepth(arr) {
  //   if(!arr){
  //     return false;
  //   }
  //    this.calculateDepthInner(arr);
  // }

  calculateDepth(arr) {
    return this.calculateDepth(arr,1);
  };
    
  calculateDepth(arr, d = 1) {
    let isArray = Array.isArray(arr);
    if (!isArray) {
      return d;
    }

    let max = d+1;
    for (let i = 0; i < arr.length; i++) {
      let depthNested = this.calculateDepth(arr[i], d + 1);
      if (depthNested > max)
        max = depthNested;
    }
    return max;
  }
};