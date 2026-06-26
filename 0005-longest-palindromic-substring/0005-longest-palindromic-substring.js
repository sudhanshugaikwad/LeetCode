/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    
    let start = 0;
    let maxLen = 1;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // palindrome is from left+1 to right-1
        const currentLen = right - left - 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
            start = left + 1;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        expandAroundCenter(i, i);
        // Even length palindrome
        expandAroundCenter(i, i + 1);
    }
    
    return s.substring(start, start + maxLen);
};