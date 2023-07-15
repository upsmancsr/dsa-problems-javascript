// Most commonly used character in a string. 
// Write a function that takes a string and returns the character that is most commonly used in the string.

const mostCommonChar = (str) => {
    let charCounts = {};
    let maxChar = "";
    let maxCount = 0;
    for (let char of str) {
        charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
    }
    for (let char in charCounts) {
        if (charCounts[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(mostCommonChar('Hello world'));