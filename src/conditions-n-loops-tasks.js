/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  const dx = queen.x > king.x ? queen.x - king.x : king.x - queen.x;
  const dy = queen.y > king.y ? queen.y - king.y : king.y - queen.y;

  return dx === dy;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;

  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 */
function convertToRomanNumerals(num) {
  const values = [10, 9, 5, 4, 1];
  const symbols = ['X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  let n = num;

  for (let i = 0; i < values.length; i += 1) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 */
function convertNumberToString(numberStr) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const ch = numberStr[i];
    let word;

    if (ch === '-') {
      word = 'minus';
    } else if (ch === '.' || ch === ',') {
      word = 'point';
    } else {
      word = words[ch.charCodeAt(0) - 48];
    }

    result += i === 0 ? word : ` ${word}`;
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 */
function isContainNumber(num, digit) {
  let n = num < 0 ? -num : num;

  if (n === 0) return digit === 0;

  while (n > 0) {
    if (n % 10 === digit) return true;
    n = (n - (n % 10)) / 10;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) return -1;

  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = total - leftSum - arr[i];
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let counter = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = counter;
      counter += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = counter;
      counter += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        matrix[bottom][i] = counter;
        counter += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        matrix[i][left] = counter;
        counter += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 */
function rotateMatrix(matrix) {
  const result = matrix;
  const n = result.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = result[i][j];
      result[i][j] = result[j][i];
      result[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const temp = result[i][j];
      result[i][j] = result[i][n - 1 - j];
      result[i][n - 1 - j] = temp;
    }
  }

  return result;
}
/**
 * Sorts an array of numbers in ascending order in place.
 */
function sortByAsc(arr) {
  const result = arr;

  const quickSort = (left, right) => {
    if (left >= right) return;

    const pivot = result[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (result[i] < pivot) i += 1;
      while (result[j] > pivot) j -= 1;

      if (i <= j) {
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
        i += 1;
        j -= 1;
      }
    }

    quickSort(left, j);
    quickSort(i, right);
  };

  quickSort(0, result.length - 1);

  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 */
function shuffleOnce(str) {
  let even = '';
  let odd = '';

  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      even += str[i];
    } else {
      odd += str[i];
    }
  }

  return even + odd;
}

function shuffleChar(str, iterations) {
  let current = str;
  const seen = {};

  let i = 0;
  while (i < iterations) {
    if (seen[current] !== undefined) {
      const cycleStart = seen[current];
      const cycleLen = i - cycleStart;
      const remaining = (iterations - cycleStart) % cycleLen;
      current = str;

      for (let k = 0; k < cycleStart + remaining; k += 1) {
        current = shuffleOnce(current);
      }

      return current;
    }

    seen[current] = i;
    current = shuffleOnce(current);
    i += 1;
  }

  return current;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 */
function getNearestBigger(number) {
  const digits = [];
  let n = number;

  if (n === 0) digits.push(0);

  while (n > 0) {
    digits.unshift(n % 10);
    n = (n - (n % 10)) / 10;
  }

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) return number;

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const temp = digits[i];
  digits[i] = digits[j];
  digits[j] = temp;

  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    const t = digits[left];
    digits[left] = digits[right];
    digits[right] = t;
    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
