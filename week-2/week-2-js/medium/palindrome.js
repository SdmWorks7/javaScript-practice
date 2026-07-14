/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase(); 
  let filteredStr;

  for(let i=0;i<str.length;i++){
    let ch = str.charAt(i);
    if((ch>='a' && ch<='z') && (ch>='0'&&ch<='9'))
      filteredStr += ch;
  }

  for(let i=0;i<filteredStr.length/2;i++){
    if(!(filteredStr[i]===filteredStr[filteredStr.length-i-1])) return false;
  }
  return true;
}

module.exports = isPalindrome;
