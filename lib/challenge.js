'use strict';

// http://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
// this takes a string, splits it into individual characters,
// reverses the order of those characters, and joins them back into a string
// if str == checkPalindrome(str), then the string is a palindrome
// checkPalindrome() returns true if the string is a palindrome, or false if not
const checkPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};

let baseTenPalindromes = [];

for (let i = 0; i < 1000000; i++) {
  let num = i.toString();
  if (checkPalindrome(num)) {
    baseTenPalindromes.push(i);
  }
}


// convert base10 numbers to binary
// http://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript

let baseTwos = [];

const convertToBinary = (n) => {
  let baseTwo = n.toString(2);
  baseTwos.push(baseTwo);
};

baseTenPalindromes.forEach(convertToBinary);

// check to see which of the base two numbers are binary
// add those to an array called finalPalindromes

let finalPalindromes = [];

for (let i = 0, max = baseTwos.length; i < max; i++) {
  let num = baseTwos[i];
  if (checkPalindrome(num)) {
    finalPalindromes.push(num);
  }
}

// convert those numbers back to base 10 for easy addition

let finalPalindromesBaseTen = [];

const convertToBaseTen = (n) => {
  finalPalindromesBaseTen.push(parseInt(n, 2));
};

finalPalindromes.forEach(convertToBaseTen);

// add those numbers together to get the final answer

let answer = finalPalindromesBaseTen.reduce( (a, b) => a + b );

console.log(answer);



module.exports = () => {
  return true;
};
