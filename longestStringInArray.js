// Longest String in an Array. 
// Write a function that accepts an array of strings. Return the longest string.

const longestString = (arr) => {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        length = arr[i].length;
        if (length > longest.length) {
            longest = arr[i];
        };
    };
    return longest;
};

console.log(longestString(["can", "screen", "scissors", "book"]))