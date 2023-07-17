function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    divide: function(a, b) {
      return a / b;
    },
    multiply: function(a, b) {
      return a * b;
    }
  };
  
function analyzeArray(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    const arrLength = arr.length;

    const avg = sum / arrLength;
    const minResult = Math.min(...arr);
    const maxResult = Math.max(...arr);
    
    return {
        average: avg,
        min: minResult,
        max: maxResult,
        length: arrLength
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    analyzeArray
};