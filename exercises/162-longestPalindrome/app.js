function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  let x = sentence.replace(/[^A-Za-z0-9]+/g, " ");
  let words = x.trim().split(" ");

  var palindromes = words.filter(function(item){return isPalindrome(item.toLowerCase)});
  return palindromes.sort(function(a, b) { 
    return b.length - a.length;
  })[0];
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function isPalindrome(word) {
  return (word==reverseString(word));
  // hint: you can detect palindromes by comparing a string to its reverse
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}