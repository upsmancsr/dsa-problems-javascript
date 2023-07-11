// Two strings are anagrams of each other. 
// Create a function that takes in two strings as two parameters and returns a Boolean that indicates whether or not the first string is an anagram of the second string.

const isAnagram = (strA, strB) => {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();

    if (strA.length != strB.length) {
        return false;
    }
    let charMapA = {};
    for (let char of strA) {
        charMapA[char] = charMapA[char] ? charMapA[char] + 1 : 1;
    }
    for (let i = 0; i < strB.length; i++) {
        let char = strB[i];
        if (!charMapA[char]) {
            return false;
        } else {
            charMapA[char]--;
        }
    }
    return true;
}


console.log(isAnagram("anagram", "nagaram"));  // This should print "true"
console.log(isAnagram("Keep", "Peek"));  // This should print "true"
console.log(isAnagram("Hello", "World"));  // This should print "false"