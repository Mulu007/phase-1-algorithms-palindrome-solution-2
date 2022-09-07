function isPalindrome(word) {
  // iteration from beginning to the middle of a string
  for (let startIndex = 0; startIndex < word.length/2 ; startIndex++) {
    // checks whether the letter we're iterating over corresponds to the letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters dont match return false 
      return false;
    }
  }
  return true;
}

/* 
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
